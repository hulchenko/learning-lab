'use server';

import postgres from 'postgres';
import {z} from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

const FormSchema = z.object({
    id: z.string(),
    customerId: z.string(),
    amount: z.coerce.number(),
    status: z.enum(['pending', 'paid']),
    date: z.string(),
});

const CreateInvoice = FormSchema.omit({id: true, date: true});

export async function createInvoice(formData: FormData){
    const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    };
    
    const {customerId, amount, status} = CreateInvoice.parse(rawFormData);
    const amountInCents = amount * 100;
    const date = new Date().toISOString().split('T')[0];

    try {
        await sql`
            INSERT INTO invoices (customer_id, amount, status, date)
            VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
        `;        
    } catch (error) {
        console.error(error);
        return {
            message: "Database error: Failed to Create Invoice."
        }
    };
    // revalidatePath('/dashboard/invoices'); <-- not needed, as the page re-renders on redirect
    redirect('/dashboard/invoices');
};

const UpdateInvoice = FormSchema.omit({ id: true, date: true });

export async function updateInvoice(id: string, formData: FormData){
    const rawFormData = {
        customerId: formData.get('customerId'),
        amount: formData.get('amount'),
        status: formData.get('status'),
    };

    const {customerId, amount, status} = UpdateInvoice.parse(rawFormData);
    const amountInCents = amount * 100;

    try {
        await sql`
            UPDATE invoices
            SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
            WHERE id = ${id}
        `;        
    } catch (error) {
        console.error(error);
        return {
            message: "Database error: Failed to Update Invoice."
        }
    };
    // revalidatePath('/dashboard/invoices'); <-- not needed, as the page re-renders on redirect
    redirect('/dashboard/invoices');
};

export async function deleteInvoice(id: string){
    try {
        await sql`DELETE FROM invoices WHERE id = ${id}`;
    } catch (error) {
        console.error(error);
        return {
            message: "Database error: Failed to Delete Invoice."
        }
    };
    revalidatePath('/dashboard/invoices');
}
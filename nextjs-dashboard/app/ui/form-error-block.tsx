import { State } from '@/app/lib/actions';

type InvoiceErrors = NonNullable<State['errors']>;
type InvoiceFields = keyof InvoiceErrors;

export default function ErrorBlock({state, showMessage, target} : {state: State, showMessage?: boolean, target?: InvoiceFields}){

  if(showMessage){
    return (
      <div id="customer-message" aria-live="polite" aria-atomic="true">
        {state.message && (
            <p className="mt-2 text-sm text-red-500">
              {state.message}
            </p>
          )}
      </div>
    )
  };

  const currentTarget = target ? state.errors?.[target] : [];

  return (
    <div id="customer-error" aria-live="polite" aria-atomic="true">
      {currentTarget?.map((error: string) => (
          <p className="mt-2 text-sm text-red-500" key={error}>
            {error}
          </p>
        ))}
    </div>
  )
}
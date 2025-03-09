export default async function NestedRouteComponent ({params}: {params: {id: string}}) {
    const { id } = await params;
    console.log("ID: ", id);
    return <h1>NESTED ROUTE PARAMS: {id}</h1>
};
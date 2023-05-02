export default function Page({
    params,
  }: {
    params: { id: string };
  }) {
    console.log(params);
    return <h1 className="text-2xl font-bold">My Page is: {Number(params?.id)}</h1>;
  }
export default async function CreateProfile({
  params,
}: {
  params: Promise<{ uid: string }>;
}) {
  const uid = (await params).uid;

  return <>{uid}</>;
}

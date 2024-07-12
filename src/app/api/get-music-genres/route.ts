export async function GET() {
  try {
    const res = await fetch(process.env.SPOTIFY_API_GENRES!.toString(), {
      headers: {
        Authorization: `Bearer ${process.env.SPOTIFY_API_TOKEN}`,
      },
    });
    const { genres } = await res.json();
    return Response.json(genres);
  } catch (error) {
    console.log(error);
  }
}

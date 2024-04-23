import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import Link from "next/link";

const GET_SONG_DETAILS = gql`
query getSongsDetails($songSlug: ID!) {
    song(id: $songSlug, idType: SLUG) {
      songFields {
        songTitle
        lyrics
        length
        genre {
          nodes {
            name
          }
        }
      }
    }
  }
`;

export default function Song() {
    const { query = {} } = useRouter();
    const { songSlug } = query;

    const { loading, error, data } = useQuery(GET_SONG_DETAILS, {
        variables: {songSlug}
    });

    if(loading) return "Loading...";
    if(error) return `Error! ${error.message}`;

    const songData = data?.song?.songFields;

    return (
        <Layout>
          <div className="song-slug">
            <div className="container">
              <Link href="/albums">
                  <p className="view-all">&#x2190; View all albums</p>
              </Link>

              <div className="song-slug__content">
                <h1>{songData.songTitle}</h1>

                <p>Song length:  {songData.length}</p>

                <p>
                    Genre:
                    {songData.genre.nodes.map((genre) => genre.name).join(", ")}
                </p>

                <h3>Lyrics</h3>

                <div>{songData.lyrics}</div>
              </div>
            </div>
          </div>
        </Layout>
    );
}
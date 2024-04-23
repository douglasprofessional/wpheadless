import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import Link from "next/link";

const GET_ALBUM_DETAILS = gql`
query getAlbumDetails($albumSlug: ID!) {
    album(id: $albumSlug, idType: SLUG) {
      albumFields {
        albumTitle
        cover {
          node {
            altText
            mediaItemUrl
          }
        }
        releaseDate
        trackList {
          nodes {
            ... on Song {
              id
              slug
              songFields {
                songTitle
              }
            }
          }
        }
      }
    }
  }
`;

export default function Album() {
    const { query = {} } = useRouter();
    const { albumSlug } = query;

    const { loading, error, data } = useQuery(GET_ALBUM_DETAILS, {
        variables: {albumSlug}
    });

    if(loading) return "Loading...";
    if(error) return `Error! ${error.message}`;

    const albumData = data?.album?.albumFields;

    return (
        <Layout>
            <div className="album-slug">
              <div className="container">
                <Link href="/albums">
                    <p className="view-all">&#x2190; View all albums</p>
                </Link>

                <div className="album-slug__content">
                  <h1>{albumData.albumTitle}</h1>

                  <p>Released on {albumData.releaseDate}</p>

                  <img className="album-slug__cover" src={albumData?.cover.node.mediaItemUrl} alt={albumData?.cover.node.altText} />

                  <h3>Track List</h3>

                  <ol className="album-slug__track-list">
                      {albumData.trackList.nodes.map((song) => (
                          <li key={song.id}>
                              <Link href={`/songs/${song.slug}`}>
                                  <a>{song.songFields.songTitle}</a>
                              </Link>
                          </li>
                      ))}
                  </ol>
                </div>
              </div>
            </div>
        </Layout>
    );
}
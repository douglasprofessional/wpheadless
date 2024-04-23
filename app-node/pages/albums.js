import { gql, useQuery } from "@apollo/client";
import Layout from "../components/Layout/Layout";
import AlbumCard from "../components/AlbumCard/AlbumCard";

const GET_ALBUMS = gql`
query getAlbums {
    albums {
      nodes {
        albumFields {
          releaseDate
          cover {
            node {
              databaseId
              mediaItemUrl
            }
          }
        }
        databaseId
        slug
      }
    }
  }
`;

export default function Albums() {
    const { loading, error, data } = useQuery(GET_ALBUMS);

    if(loading) return "Loading...";
    if(error) return `Error! ${error.message}`;
    
    return (
        <Layout>
            <div className="container">
              <ul className="gallery">
                  {data.albums.nodes.map((album) => (
                      <li className="gallery__item" key={album.databaseId}>
                          <AlbumCard album={album} />
                      </li>
                  ))}
              </ul>
            </div>
        </Layout>
    );
}
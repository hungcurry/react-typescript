import { useState } from 'react'
import PropTypes from 'prop-types';


const Card = ({data})=>{
  return (
    <div className="col-lg-6">
      <article className="card mb-3">
        <div className="row g-0">
          <div className="col-4">
            <img
              src={data.img_url}
              alt={data.title}
              className="img-fluid rounded-start h-100"
            />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{data.title}</h5>
              <p className="card-text">{data.description}</p>
              <time className="card-text">
                <small className="text-body-secondary">
                  {data.created_at}
                </small>
              </time>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
// props type
Card.propTypes = {
  data: PropTypes.object 
};

function Example() {
  const postData = [
    {
      id: 1,
      img_url: "https://picsum.photos/400/600?random=1",
      title: "Adventure",
      description:
        "Embark on a fantastical journey through the mystical Shimmering Sands, an ancient desert rumored to hold the secret of the Lost Oasis.",
      created_at: "2023.06.27"
    },
    {
      id: 2,
      img_url: "https://picsum.photos/400/600?random=2",
      title: "Clockwork",
      description:
        'Step into a world where steam-powered contraptions and Victorian aesthetics blend seamlessly in "The Clockwork Conundrum."',
      created_at: "2023.06.29"
    },
    {
      id: 3,
      img_url: "https://picsum.photos/400/600?random=3",
      title: "Symphony",
      description:
        "Join a talented musician on a quest to uncover the truth behind a legendary composer said to be a ghostly presence. ",
      created_at: "2023.06.30"
    },
    {
      id: 4,
      img_url: "https://picsum.photos/400/600?random=4",
      title: "Title",
      description:
        "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      created_at: "2023.07.02"
    },
    {
      id: 5,
      img_url: "https://picsum.photos/400/600?random=5",
      title: "Files",
      description:
        'Dive into the world of clandestine adventures as an elite artifact recovery specialist in "Enigma Files."',
      created_at: "2023.07.03"
    },
    {
      id: 6,
      img_url: "https://picsum.photos/400/600?random=6",
      title: "Chronicles",
      description:
        "Command a state-of-the-art starship crewed by a diverse group of intergalactic pioneers.",
      created_at: "2023.07.05"
    }
  ];
  return (
    <div className="container">
      <div className="row">
        {
          postData.map((item)=>(
            <Card key={item.id} data={item}/>
          ))
        }
      </div>
    </div>
  );
}

export default Example

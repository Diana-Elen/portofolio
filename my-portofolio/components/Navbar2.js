import { useRef } from 'react';
import NewComponent from './NewComponent';

export default function CatFriends() {
  const ref = useRef(null);
  function handleScroll() {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <nav>
        <button>
          Tom
        </button>
        <button>
          Maru
        </button>
        <button onClick={handleScroll}>
          Jellylorum
        </button>
      </nav>
      <div>
        <ul>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="Tom"

            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/300/200"
              alt="Maru"
              
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/250/200"
              alt="Jellylorum"
            />
          </li>
        </ul>
      </div>
      <NewComponent ref={ref} text="hello world!" />
    </>
  );
}


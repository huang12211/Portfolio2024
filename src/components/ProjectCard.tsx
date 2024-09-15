'use client';
import Image from 'next/image';
import { useState } from 'react';

import { ProjectPopup } from './ProjectPopup';

const ProjectCard = (props: {
  card_image_src: string;
  popup_image_src: string;
  image_alt: string;
  title: string;
}) => {
  const [popupCard, openPopup] = useState(false);

  return (
    <>
      <button
        onClick={() => openPopup(true)}
      >
        <div className="h-52 w-44 rounded shadow duration-150 hover:scale-105">
          <div className="h-36 w-44 overflow-hidden p-2">
            <Image
              src={props.card_image_src}
              alt={props.image_alt}
              width="144"
              height="144"
              className="h-36 w-auto content-center object-cover"
            />
          </div>
          <div className="my-2 h-12 w-full content-center px-2 text-sm font-bold">
            <p>
              {props.title}
            </p>
          </div>
        </div>
      </button>

      <ProjectPopup
        trigger={popupCard}
        setTrigger={openPopup}
        project_title={props.title}
        image_src={props.popup_image_src}
        image_alt={props.image_alt}
      />
    </>
  );
};

export { ProjectCard };

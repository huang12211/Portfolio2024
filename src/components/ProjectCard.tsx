'use client';
import Image from 'next/image';
import { useState } from 'react';

import { ProjectPopup } from './ProjectPopup';
import { Python } from './Python';
import { Scikitlearn } from './Scikitlearn';
import { Tensorflow } from './Tensorflow';

const ProjectCard = (props: {
  image_src: string;
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
              src={props.image_src}
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
        project_title="Facial Emotion Detection"
        image_src="/assets/images/FacialEmotionsPopupImg.png"
        image_alt="Image with different facial emotions"
      >
        <div>
          <div>
            <p className="flex flex-wrap items-end gap-1">
              <h2 className="pt-2 font-bold underline">Codebase:</h2>
              <a
                href="https://github.com/huang12211/MIT_ML_AI_Course_FacialEmotionDetection"
                className="text-sky-600 hover:underline"
              >
                Github Repository
              </a>
            </p>
          </div>
          <h2 className="pt-2 font-bold underline">Project Description:</h2>
          <p>
            CNN model chosen for implementation after exploring ANN, CNN and transfer learning possibilities to classify images of people expressing different facial emotions. The CNN model obtained an accuracy of 98% accuracy.
          </p>
          <h2 className="pt-2 font-bold underline">Project Takeaways:</h2>
          <p>The 4-layer CNN model performed best in comparison to the following archtectures:</p>
          <ul>
            <li>- 3-layer, 4-layer and 6-layer CNN</li>
            <li>- VGG</li>
            <li>- ResNet50</li>
            <li>- EfficientNet</li>
          </ul>
          <h2 className="pt-2 font-bold underline">Tools:</h2>
          <div className="flex-cols flex h-14 flex-wrap items-center gap-4">
            <Python></Python>
            <Tensorflow></Tensorflow>
            {/* keras */}
            <Scikitlearn></Scikitlearn>
            {/* Google Colab */}
            {/* Pandas */}
          </div>
        </div>
      </ProjectPopup>
    </>
  );
};

export { ProjectCard };

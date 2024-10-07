import { CPlusPlus } from './C++Logo';
import { Csharp } from './Csharp';
import { Css } from './CssLogo';
import { Figma } from './Figma';
import { HtmlLogo } from './HtmlLogo';
import { JavascriptLogo } from './JavascriptLogo';
import { Keras } from './KerasLogo';
import { Python } from './Python';
import { Scikitlearn } from './Scikitlearn';
import { Solidworks } from './Solidworks';
import { SQLiteLogo } from './SQLiteLogo';
import { Tensorflow } from './Tensorflow';
import { TypescriptLogo } from './TypescriptLogo';
import { Unity3D } from './Unity3D';

const ProjectPopupContent = (props: {
  project_title: string;
}) => {
  if (props.project_title === 'Facial Emotion Detection') {
    return (
      <>
        <div>
          <div>
            <p className="flex flex-wrap items-end gap-1">
              <h2 className="pt-2 font-bold underline">Codebase:</h2>
              <a
                href="https://github.com/huang12211/MIT_ML_AI_Course_FacialEmotionDetection"
                target="_blank>"
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
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            <Python></Python>
            <Tensorflow></Tensorflow>
            <Keras></Keras>
            <Scikitlearn></Scikitlearn>
            {/* Google Colab */}
            {/* Pandas */}
          </div>
        </div>
      </>
    );
  } else if (props.project_title === 'Invasive Hydrangea Species Detection') {
    return (
      <>
        <div>
          <div>
            <p className="flex flex-wrap items-end gap-1">
              <h2 className="pt-2 font-bold underline">Codebase:</h2>
              <a
                href="https://github.com/huang12211/SYDE522-InvasiveSpecies"
                target="_blank>"
                className="text-sky-600 hover:underline"
              >
                Github Repository
              </a>
            </p>
          </div>
          <h2 className="pt-2 font-bold underline">Project Description:</h2>
          <p>
            Various machine learning algorithms were explored to evaluate their effectiveness on classifying
            the presence of invasive hydrangea in images; namely SVM, VGG16, ResNet, and CapsNet.
          </p>
          <h2 className="pt-2 font-bold underline">Project Takeaways:</h2>
          <p>
            Given the computational constraints, the ResNet architecture ended up being the one that performed the best
            with an accuracy of 98.89% after being trained for 630 minutes. The ResNet model was not able to outperform
            the Inception-v3 algorithm that was submitted to the Kaggle competition which was developed using a more
            sophisticated GPU.
          </p>
          <h2 className="pt-2 font-bold underline">Tools:</h2>
          <div className="flex flex-row flex-wrap items-center gap-2 md:gap-4">
            <Python></Python>
            <Tensorflow></Tensorflow>
            <Keras></Keras>
            {/* Google Colab */}
            {/* Pandas */}
          </div>
        </div>
      </>
    );
  } else if (props.project_title === 'Hockey Concussion Project') {
    return (
      <>
        <div>
          <div>
            <p className="flex flex-wrap items-end gap-1">
              <h2 className="pt-2 font-bold underline">Codebase:</h2>
              {/* <a
                  href="https://github.com/huang12211/SYDE522-InvasiveSpecies"
                  target="_blank>"
                  className="text-sky-600 hover:underline"
                >
                  Github Repository
                </a> */}
              No access due to partnership agreements.
            </p>
          </div>
          <h2 className="pt-2 font-bold underline">Project Description:</h2>
          <p>
            A virtual reality environment was created to simulate different scenarios where participants were subjected
            to violent body-checks. EEG, ECG and EMG signals of participants were captured to identify whether or not these
            biosignals could serve as objective measures to diagnose concussions.
          </p>
          <h2 className="pt-2 font-bold underline">Project Takeaways:</h2>
          <p className="italic">
            Development of Concussion Evaluation Tools Using Life-like VR Environments
          </p>
          <p className="text-[9px] md:text-sm">
            Sawires, Y., Huang, E., Gomes, A., Fernandes, K. & Wang, D. Development of Concussion Evaluation Tools Using Life-Like Virtual Reality Environments. in 326–333 (2018). doi:10.1007/978-3-319-92279-9_44
          </p>
          <h2 className="pt-2 font-bold underline">Tools:</h2>
          <div className="flex flex-row flex-wrap items-center gap-2 md:gap-4">
            <Csharp></Csharp>
            <CPlusPlus></CPlusPlus>
            <Unity3D></Unity3D>
            <Solidworks></Solidworks>
            {/* <Arduino></Arduino> */}
          </div>
        </div>
      </>
    );
  } else if (props.project_title === 'Elaine\'s Easecipes') {
    return (
      <>
        <div>
          <div>
            <p className="flex flex-wrap items-end gap-1">
              <h2 className="pt-2 font-bold underline">Codebase:</h2>
              <a
                href="https://github.com/huang12211/ElaineFoodWebsite"
                target="_blank>"
                className="text-sky-600 hover:underline"
              >
                Github Repository
              </a>
            </p>
          </div>
          <h2 className="pt-2 font-bold underline">Project Description:</h2>
          <p>
            A personal website built to stock all of my favourite recipes. Feel free to take a look! Mock-ups of
            the envisonned website were first created using Figma. The design was then implemented using the tools
            listed below.
          </p>
          <h2 className="pt-2 font-bold underline">Project Takeaways:</h2>
          <p>
            Developing this website without a framework highlighted how frameworks make development simpler and why
            there are so many that exist.
          </p>
          <h2 className="pt-2 font-bold underline">Tools:</h2>
          <div className="flex flex-row flex-wrap items-center gap-2 md:gap-4">
            <Figma></Figma>
            <HtmlLogo></HtmlLogo>
            <Css></Css>
            <JavascriptLogo></JavascriptLogo>
            <TypescriptLogo></TypescriptLogo>
            <SQLiteLogo></SQLiteLogo>
          </div>
        </div>
      </>
    );
  } else {
    return '';
  }
};

export { ProjectPopupContent };

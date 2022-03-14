let advanture = {
  currentScene: 'beginStory',
  beginStory: {
    text: 'You woke up and found yourself in an unfamiliar environment. You are lying on the bed with some cannula attached to the back of your left hand. The surroundings were quiet, except for the beeping sound of the instrument. At this point you are thinking:',
    options: [
      {
        option: 'where am I?',
        destination: 'labortory',
      },
      {
        option: 'It seems that this is a laboratory for researching viruses! !',
        destination: 'labortory',
      },
    ],
  },

  labortory: {
    text: 'You looked around, and there were medicines, test tubes, and shiny instruments that were randomly placed around. It seemed that this was where the virus that scientific researchers said first spread. There is no one in the lab for the time being, and you decide to:',
    options: [
      {
        option: 'Unplug the cannula, get up and look around for useful clues.',
        destination: 'lookAround',
      },
      {
        option:
          'Continue to lie down and wait and see, who knows when these researchers will be back.',
        destination: 'doNotMove',
      },
    ],
  },

  lookAround: {
    text: 'You looked around lightly, and found a thick stack of documents on the table. Your profile at the top, and the progress of experiments conducted on you. Luckily you have just been brought back and they have not had time to do anything to you. Turning back, it is recorded that many people could not bear the consequences of virus experiments and died. You clenched your fists, feeling very angry. Flipped to the bottom of the data, which is mixed with a map of the laboratory, and you decide:',
    options: [
      {
        option: 'Take the map.',
        destination: 'withMap',
      },
      {
        option: 'Put the map back, it is useless.',
        destination: 'withoutMap',
      },
    ],
  },
  doNotMove: {
    text: 'While you were waiting silently, a staff member walked in and planned to continue the experiment on you. Because you did not take any measures, you were drugged by the researchers, lost consciousness, and had to be slaughtered.',
    defaultDestination: 'beginStory',
    buttonText: "Let's try this again",
  },
  withMap: {
    text: 'You have just put away the map when you hear footsteps coming from outside, and there is only one person. You look at the bed and behind the door, and you decide:',
    options: [
      {
        option: 'Lie back on the bed and pretend nothing happened..',
        destination: 'chooseBed',
      },
      {
        option: 'Hide behind the door.',
        destination: 'chooseDoor',
      },
    ],
  },
  chooseBed: {
    text: 'The door was pushed open, and a researcher dressed in white walked in from outside. He seemed to notice that the instrument was no longer beeping. He approached the bed, wanting to examine it carefully. As he gets closer, you:',
    options: [
      {
        option: 'Get up and knock him out quickly.',
        destination: 'hitHim',
      },
      {
        option: 'As long as you do not move, he will not find clues.',
        destination: 'noAction',
      },
    ],
  },
  hitHim: {
    text: 'Your movements are neat and agile, and you do not make a lot of noise. There seems to be nothing valuable in this room, and you remember the most central experimental center indicated by the map, where the viruses must be kept. So you decide:',
    options: [
      {
        option:
          "First, put on the researcher's clothes and put on a mask to disguise.",
        destination: 'changeClothes',
      },
      {
        option:
          'There are very few officers outside, so you can hide with confidence.',
        destination: 'walkOutWithoutChanging',
      },
    ],
  },
  changeClothes: {
    text: 'You disguised so well that no one noticed that you switched identities with the real researcher. You have unimpeded all the way. But suddenly a group of researchers also dressed in white came across. You are about to meet them, this time you decide:',
    options: [
      {
        option: 'Find a room to hide in.',
        destination: 'hide',
      },
      {
        option:
          'Join them and see if you can find out some useful information.',
        destination: 'join',
      },
    ],
  },
  hide: {
    text: "You hid in a random room, and before you could breathe a sigh of relief, you heard footsteps getting closer and closer to the room. It seems that they are coming here too. Hide in the corner first. As soon as you hide, they come in. They had a meeting here on exactly what you really need to get, antibodies to destroy pathogens. It just so happened that they also revealed where the antibody lock was stored. At this time, the alarm sounded suddenly, and the group of researchers had to leave in a hurry. After they leave the room, you come out and find a work card on the ground with some information about the researcher, followed by a pattern of varying numbers: 3 green triangles, 7 red squares, and 5 yellow stars. You don't know what this means, but you decide:",
    options: [
      {
        option: 'Keep this work permit.',
        destination: 'keepTheCard',
      },
      {
        option:
          'You already have the work card of the researcher who was knocked out, so you throw this back.',
        destination: 'throwAway',
      },
    ],
  },
  keepTheCard: {
    text: 'You just walked out of the room and found that the red light in the corridor outside the door kept flashing, and I heard that an experimental victim escaped. It turns out that the person who was knocked unconscious by you just woke up and told the upper-level experimental subject to change his clothes, and now they are investigating all the researchers. You ran out of the chaos, planning to find the antibodies first. But the lab where the antibodies are stored is on the 3rd floor, and you glance at the elevator and then the stairs, and you decide:',
    options: [
      {
        option: 'Climb the stairs.',
        destination: 'stairs',
      },
      {
        option: 'Take the elevator.',
        destination: 'elevator',
      },
    ],
  },
  stairs: {
    text: 'You finally arrived at the laboratory where the antibodies were stored, but there was an officer standing at the door. When he saw you, he came to check your identity. You thought about it for a while, and you:',
    options: [
      {
        option: 'Hand him the work card you just picked up.',
        destination: 'newPermit',
      },
      {
        option: "Hand him the first researcher's work permit.",
        destination: 'oldPermit',
      },
    ],
  },
  newPermit: {
    text: "The only news the patrol received was that the identity of the first researcher had been changed. When he saw this work permit, he didn't embarrass you any more. You stood at the door and looked at the three-digit code on the door, a row of triangles, a row of squares, a row of stars, you had an idea and pressed:",
    options: [
      {
        option: '375',
        destination: 'correctAnswer',
      },
      {
        option: '357',
        destination: 'wrongAnswer',
      },
    ],
  },
  correctAnswer: {
    text: 'You successfully infiltrated the laboratory and took the antibodies, and no one found it. At this time, you only need to destroy the pathogen and you have completed the task, and you quickly walk towards the core laboratory. When you were about to arrive, you saw that the researchers were gathered together. That person found that his work permit was lost. In order to prevent the escaped subjects from being picked up, he was now conducting investigations one by one. You think about it and you decide:',
    options: [
      {
        option: 'Go back to the lab where the antibody was just taken.',
        destination: 'turnBack',
      },
      {
        option: 'Go straight to them.',
        destination: 'goStraight',
      },
    ],
  },
  turnBack: {
    text: "You made your way back to the door of the lab where the antibodies were stored, and saw the only patrolman, you knocked him out cleanly again, and then changed into his clothes. At this time, everyone's attention was on the researchers. You swaggered into the core laboratory wearing a patrol uniform, and successfully destroyed the pathogen and the entire core laboratory. The sound of the explosion was transmitted from the core area to the outside. Before you lose consciousness, it seems that all the people in the end times are thanking you.",
    defaultDestination: 'beginStory',
    buttonText: 'You are the Hero!',
  },
  withoutMap: {
    text: 'This is the first time you come to this place and you are not familiar with the road here. The map is a very important tool. If you go out without a map, you will get lost.',
    defaultDestination: 'beginStory',
    buttonText: "Let's try this again",
  },
  chooseDoor: {
    text: 'As soon as the researcher walks in, you knock him out, but the place is too close to the hallway for the patrolmen to hear you and you get caught. ',
    defaultDestination: 'beginStory',
    buttonText: "Let's try this again",
  },
  noAction: {
    text: 'You did not take any action, the researchers found out that you had the cannula removed from your hand, and immediately rang the alarm bell, and you were caught.',
    defaultDestination: 'beginStory',
    buttonText: "Let's try this again",
  },
  walkOutWithoutChanging: {
    text: "There weren't a lot of cops out there, but you couldn't deal with several cops at once, so you got caught.",
    defaultDestination: 'beginStory',
    buttonText: "Let's try this again",
  },
  join: {
    text: "Not only did you fail to find out, but you exposed your identity because they asked you questions that you couldn't answer.",
    defaultDestination: 'beginStory',
    buttonText: "Let's try this again",
  },
  throwAway: {
    text: 'The person who was knocked out has woken up, this identity is no longer safe.',
    defaultDestination: 'beginStory',
    buttonText: "Let's try this again",
  },
  elevator: {
    text: 'The alarm bells are still ringing, and to seal off the scene, they have stopped the elevator and you are trapped in the elevator.',
    defaultDestination: 'beginStory',
    buttonText: "Let's try this again",
  },
  oldPermit: {
    text: 'The identity of the first researcher has been revealed. You are spotted. ',
    defaultDestination: 'beginStory',
    buttonText: "Let's try this again",
  },
  wrongAnswer: {
    text: 'The password was entered incorrectly, and the patrol police next to him found out the clue and was caught.',
    defaultDestination: 'beginStory',
    buttonText: "Let's try this again",
  },
  goStraight: {
    text: 'Everyone is checking their identities. If you go in, you are going to be a sheep. ',
    defaultDestination: 'beginStory',
    buttonText: "Let's try this again",
  },
};

document.addEventListener('DOMContentLoaded', function () {
  let button = document.querySelector('#start-button');
  let content = document.querySelector('#content');
  button.addEventListener('click', renderScene);
});

function renderScene() {
  // console.log('hello');
  // console.log(content);
  let text = 'Next';
  if (advanture[advanture.currentScene].buttonText) {
    text = advanture[advanture.currentScene].buttonText;
  }
  content.innerHTML = `
  <div class="container">
    <p>${advanture[advanture.currentScene].text}</p>
  </div>
  <div class="option-selector">
    ${getOption()}
  </div>
  <button id='submit-button'>${text}</button>
  `;
  let button = document.querySelector('#submit-button');
  button.addEventListener('click', function () {
    getInputValue();
  });
  // let optionButtons = document.getElementsByClassName('btn');
  // console.log(optionButtons);
}

function getInputValue() {
  let inputs = document.querySelectorAll('input[type="radio"]');
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      advanture.currentScene = inputs[i].getAttribute('data-destination');
      renderScene();
      return;
    }
  }
  advanture.currentScene = advanture[advanture.currentScene].defaultDestination;
  renderScene();
}

function getOption() {
  let input = '';
  if (!advanture[advanture.currentScene].options) {
    return '';
  }
  for (let i = 0; i < advanture[advanture.currentScene].options.length; i++) {
    // console.log(advanture.storyLine.options[i].option);
    // input += `
    //     <button class="btn">${advanture.storyLine.options[i].option}</button>
    // `;
    input += `
      <div>
        <input data-destination=${
          advanture[advanture.currentScene].options[i].destination
        } id="radio${i}" type="radio" name="option" />
        <label for="radio${i}">${
      advanture[advanture.currentScene].options[i].option
    }</label>
      </div>
    `;
  }
  return input;
}

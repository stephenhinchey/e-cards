const name = 'Maggie';

const age = 2020 - 1958;

const message_1 = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, aspernatur nesciunt? Alias beatae consequatur animi accusantium illum velit nostrum! Ipsa quibusdam in est perspiciatis rerum doloribus, voluptates veniam pariatur, nostrum, labore quisquam quasi. Voluptas vero ipsa quaerat nisi vitae repellendus accusamus odit maxime? Eveniet, nesciunt?`;

const message_2 = message_1;

const quote_1 = "";

const signature = `<img src="https://fontmeme.com/permalink/200506/34ad4aedc64b0d1020d6d87ebf06d184.png" alt="signature-fonts" border="0">`;


const age_suffix = (age) => {
    let j = age % 10;
    let k = age % 100;

    if (j == 1 && k != 11) {
        return age + "st";
    }

    if (j == 2 && k != 12) {
        return age + "nd";
    }

    if (j == 3 && k != 13) {
        return age + "rd";
    }

    return age + "th";
}

const age_with_suffix = age_suffix(age);

document.getElementById('dear').innerHTML = `Dear ${name}`;
document.getElementById('happy-birthday').innerHTML = `Happy ${age_with_suffix} Birthday`;
document.getElementById('message-1').innerHTML = message_1;
document.getElementById('message-2').innerHTML = message_2;
document.getElementById('quote-1').innerHTML = quote_1;
document.getElementById('signature').innerHTML = signature;


const app = document.getElementById('quote-1');

const typewriter = new Typewriter(app, {
    loop: true
});

const tw_message_1 = 'You are great friend';
const tw_message_2 = 'And always there for us';
const tw_message_3 = 'Your lovely to be around';
const tw_message_4 = 'You are always nice to us';

typewriter.typeString("")
    .typeString(tw_message_1)
    .pauseFor(500)
    .deleteAll()
    .typeString(tw_message_2)
    .pauseFor(500)
    .deleteAll()
    .typeString(tw_message_3)
    .pauseFor(500)
    .deleteAll()
    .typeString(tw_message_4)
    .pauseFor(500)
    .deleteAll()
    .start();

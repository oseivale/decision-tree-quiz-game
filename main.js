const wrapper = document.getElementById('wrapper')
const question = document.getElementById('question')
const options = document.getElementById('options')
const nextBtn = document.getElementById('nextBtn')
const iconWrapper = document.getElementById('icon-wrapper')
const svg = document.getElementsByTagName('svg')
const backtoStart = document.getElementById('backtoStart')

const lightBulb = `<svg class="fadeIn" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M15.691 1c-5.315 0-9.628 4.276-9.69 9.579v.005a3.203 3.203 0 0 0 0 .209c.003.13.012.309.033.528a9.672 9.672 0 0 0 3.598 6.928c1.836 2.072 2.29 3.928 2.342 4.552v.006c.006.065.016.13.03.193H12v1.79l7.5-1.498v-.05c.057-.136.094-.282.107-.435V22.8c.057-.689.36-2.524 2.153-4.541a9.665 9.665 0 0 0 3.599-6.969a7.6 7.6 0 0 0 .032-.571v-.113C25.324 5.284 21.012 1 15.691 1m-7.69 9.61A7.69 7.69 0 0 1 15.691 3c4.217 0 7.644 3.393 7.7 7.627v.093c0 .053-.006.174-.026.417l-.002.012v.013a7.665 7.665 0 0 1-2.911 5.583l-.067.052l-.057.063c-1.888 2.095-2.473 4.097-2.653 5.27h-.632c.045-1.535.249-4.395 1.118-5.35c.86-.68 1.43-1.71 1.5-2.88c.01-.11.01-.18.01-.23v-.04a3.971 3.971 0 0 0-3.97-3.93a3.96 3.96 0 0 0-2.45 7.07c.862.963 1.074 3.825 1.125 5.36h-.48c-.224-1.207-.966-3.201-2.83-5.278l-.058-.064l-.068-.053a7.673 7.673 0 0 1-2.91-5.558l-.002-.018l-.002-.019A5.178 5.178 0 0 1 8 10.656v-.029zm7.7.09c1.62 0 2.94 1.31 2.96 2.93v.08c0 .03 0 .07-.01.13c-.05.84-.46 1.63-1.12 2.15l-.07.05l-.06.06c-1.1 1.22-1.33 4.32-1.37 6.02h-.65c-.05-1.7-.29-4.8-1.39-6.02l-.06-.06l-.07-.05a2.96 2.96 0 0 1-1.12-2.17a.336.336 0 0 0-.006-.06a.193.193 0 0 1-.004-.03v-.09c.03-1.62 1.36-2.94 2.97-2.94M19.5 24.312L12 25.81v.969l7.5-1.58zM12 28v-.2l7.5-1.579V28a1 1 0 0 1-1 1h-1.116a1.96 1.96 0 0 1-1.692 1A1.96 1.96 0 0 1 14 29h-1a1 1 0 0 1-1-1"/></svg>`

const checkMark = `<svg class="fadeIn" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="m14 21.414l-5-5.001L10.413 15L14 18.586L21.585 11L23 12.415z"/><path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"/></svg>`

// Binary tree node structure
function Node(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
}

// Decision tree
var level5No = new Node("Consider alternatives such as adoption or remaining child-free.");
var level5Yes = new Node("Looks like you may be ready to take the next step and have a child.");
var level4No = new Node("Consult with a healthcare provider to assess risks to potential offspring.");
var level4Yes = new Node("Are you and your partner in good health, both physically and mentally?", level5Yes, level5No);

var level3No = new Node("Consider whether having a child could strain the relationship further.");
var level3Yes = new Node("Is your relationship with your partner stable and supportive?", level4Yes, level4No);

var level2No = new Node("Consider delaying having children until you are more financially secure.");
var level2Yes = new Node("Do you and your partner feel emotionally and mentally prepared for the responsibilities of parenthood?", level3Yes, level3No);

var root = new Node("Are you financially stable and able to provide for a child?", level2Yes, level2No);

var currentNode = root;

function restart() {
    location.reload()
}

backtoStart.addEventListener('click', restart)

// Function to update UI with current node question and options
function updateUI() {
    question.classList.add('fadeIn')
    options.classList.add('fadeIn')
    nextBtn.classList.add('fadeIn')
    backtoStart.classList.add('fadeIn')

    setTimeout(() => {
        question.classList.remove('fadeIn')
        options.classList.remove('fadeIn')
        nextBtn.classList.remove('fadeIn')
        backtoStart.classList.remove('fadeIn')
    }, 1000);

    question.textContent = currentNode.value;

    if (currentNode.left === null && currentNode.right === null) {
        // Reached leaf node, display result
        document.getElementById("options").innerHTML = '';
        document.getElementById("nextBtn").style.display = 'none';
        document.getElementById("backtoStart").style.display = 'flex';

        // document.getElementById("result").textContent = "Decision: " + currentNode.value;
    } else {
        // Display yes/no radio buttons
        document.getElementById("options").innerHTML = `
        
        <label><input type="radio" name="answer" value="yes">Yes</label><br />
        <label><input type="radio" name="answer" value="no">No</label>
      `;
        document.getElementById("nextBtn").style.display = 'block';
    }
}

// Function to handle next button click
document.getElementById("nextBtn").addEventListener("click", function () {
    var answer = document.querySelector('input[name="answer"]:checked');
    wrapper.classList.add('slideRight')



    setTimeout(() => {
        wrapper.classList.remove('slideRight')
        updateUI();
    }, 1000);

    console.log('level5Yes.value', currentNode)

    if (currentNode.left.value === level5Yes.value) {
        setTimeout(() => {
            iconWrapper.innerHTML = checkMark
        }, 2000);
    }

    if (answer) {
        var choice = answer.value;
        if (choice === 'yes') {
            currentNode = currentNode.left;
        } else {
            setTimeout(() => {
                iconWrapper.innerHTML = lightBulb
            }, 1000);

            currentNode = currentNode.right;
        }

    } else {
        alert("Please select an option.");
    }
});

// Initial UI update
updateUI();
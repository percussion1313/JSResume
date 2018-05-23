// Capitalized name 
var fullName = 'peter grant'

console.log('Name: ' + fullName.toUpperCase())
//Career *pending*
var career = ['Web Developer/Software Engineer', 'Musician']

console.log('Career: ' + career[0] + ' / ' + career[1])

var description = 'I am a pretty chill guy who likes drumming and partying'

console.log('Description: ' + description)

console.log(' ')

console.log('My Interests: ')

var interests = ['Handstands', 'Percussion', 'Drinking Craft Beer']

for (i = 0; i < interests.length; i++) {
    console.log('* ' + interests[i])
}

console.log(' ')

console.log('My Previous Experience:')
var exp = [

    {
        location: 'TicketBiscuit',
        role: 'Operation',
        desc: 'Supported/Trained clients with the ticket software',
    },
    {
        location: 'Universal Studios',
        role: 'Performer',
        desc: 'Performed parades daily for guests',
    },
    {
        location: 'Raglan Road',
        role: 'Host',
        desc: 'Took care of restaurant guests',
    },
    {
        location: 'Tuscaloosa Amphitheatre',
        role: 'Intern',
        desc: 'Took part in daily operations with the venue before, during, and after concerts/events',
    },
]

function myExp() {

    for (e = 0; e < exp.length; e++) {
        console.log('* ' + exp[e].location + ': ' + exp[e].role + ' - ' + exp[e].desc)
    }
}

console.log(myExp())

console.log(' ')

console.log('My Skills:')

var skills = ['Percussion', 'Handstands', 'Juggling Only 3 Items', 'CSS', 'HTML', 'Javascript']

function displaySkill(BAM, skills) {
        if (BAM == 1) {
            console.log('* ' + 'BAM ' + skills)
            return(skills);
        }
        else {
            console.log('* ' + skills)
            return(skills);
        }    
    }

displaySkill(1,'Percussion')
displaySkill(1,'Handstands')
displaySkill(0,'Juggling Only 3 Items :(')
displaySkill(1,'CSS')
displaySkill(1,'HTML')
displaySkill(1,'Javascript')



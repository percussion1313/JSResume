// Capitalized name 
var fullName = 'peter grant'

console.log('Name: ' + fullName.toUpperCase())
//Career *pending*
var career = ['Web Developer', 'Musician']

console.log('Career: ' + career[0] + ' / ' + career[1])

var description = 'I am a pretty chill guy who loves drumming and partying'

console.log('Description: ' + description)

console.log(' ')

console.log('My Interests: ')

var interests = ['Handstands', 'Percussion', 'Remembering people in Shows/Movies']

for (i = 0; i < interests.length; i++) {
    console.log('*' + interests[i])
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
            console.log('*' + exp[e].location + ': ' + exp[e].role + ' - ' + exp[e].desc)
        }
    }

console.log(myExp())

console.log(' ')


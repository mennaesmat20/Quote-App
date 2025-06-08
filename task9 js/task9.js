var quotes = [
    "Be yourself; everyone else is already taken"
    ,
    "A room without books is like a body without a soul."
    ,
    "You only live once, but if you do it right, once is enough."
    ,
    "Be the change that you wish to see in the world."
    ,
    "If you tell the truth, you don't have to remember anything."
]
var writers = [
    "― Oscar Wilde", "― Marcus Tullius Cicero", "― Mae West", "― Mahatma Gandhi", "― Mark Twain"
]

function getQuotes() {
    var quote = ''
    var writer = ''
    var x = Math.floor(Math.random() * 5)
    quote = quotes[x]
    writer = writers[x]
    document.getElementById('quotes').innerHTML = quote
    document.getElementById('writers').innerHTML = writer
}



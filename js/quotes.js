const quotes = [
    {
        quote : "test1",
        author : "test1_1",
    },
    {
        quote : "test2",
        author : "test2_1",
    },
    {
        quote : "test3",
        author : "test3_1",
    },
    {
        quote : "test4",
        author : "test4_1",
    },
    {
        quote : "test5",
        author : "test5_1",
    },
    {
        quote : "test6",
        author : "test6_1",
    },
    {
        quote : "test7",
        author : "test7_1",
    },
    {
        quote : "test8",
        author : "test8_1",
    },
    {
        quote : "test9",
        author : "test9_1",
    },
    {
        quote : "test10",
        author : "test10_1",
    }
]


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
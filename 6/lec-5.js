/*
const productReview = [
    { name: 'wali', response: 'positive', ratings: '5' },
    { name: 'hasib', response: 'positive', ratings: '5' },
    { name: 'sakib', response: 'negative', ratings: '3' },
];

const positiveReviews = productReview.every((value) => value.ratings > 3);

if (positiveReviews) {
    console.log('100% customers satisfied');
} else {
    console.log('Not all the customers are satisfied');
}
*/

const productReview = [
    { name: 'wali', response: 'positive', ratings: '5' },
    { name: 'hasib', response: 'positive', ratings: '5' },
    { name: 'sakib', response: 'negative', ratings: '3' },
];

const negativeReview = productReview.some((user) => user.response === 'negative');

if (negativeReview) {
    console.log('There are negative reviews');
} else {
    console.log('No negative reviews');
}
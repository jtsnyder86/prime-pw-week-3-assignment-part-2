console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {  
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5 
//   - Which part of the example loop do you need to change to do this?
console.log('count from 0 to 5');

// we need to change the condition so that i is less than 6 so it will stop at 5
for (let i=0; i<6; i++) {  
  console.log(i);
}

// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
console.log('count from 3 to 5');

// we will need to change what we set i to; we will set i to 3
for (let i=3; i<6; i++) {  
  console.log(i);
}

// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');

// we can change the conditions so that i is set at 2, that i is less than or equal to 10, and increment by 2
for (let i=2; i<=10; i+=2) {  
  console.log(i);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a countdown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');

for (let i=5; i>=0; i--) {  
  console.log(i);
}

// 2. For of loops  
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb']

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:')
let i = 0

for( i of stars ){
  console.log( i );

}; 


// 3. While loops  
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
i = 0

console.log('Some stars using while:')
while (stars [i]) {
  console.log(stars[i]);
  i++
};

// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');
i = 0

while ( i <= 5) {
  console.log(i);
  i++;
}

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
let index = 10
const min = 5

while( index >= min) {
  console.log(index);
  index--;
}

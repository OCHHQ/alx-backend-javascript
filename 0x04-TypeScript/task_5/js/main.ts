// Define a type for the brand property
type Brand<K, T> = K & { __brand: T };

// Define MajorCredits interface
interface MajorCredits {
  credits: number;
  __brand: 'MajorCredits';
}

// Define MinorCredits interface
interface MinorCredits {
  credits: number;
  __brand: 'MinorCredits';
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MajorCredits',
  } as MajorCredits;
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'MinorCredits',
  } as MinorCredits;
}

// Example usage
const majorSubject1: MajorCredits = { credits: 3, __brand: 'MajorCredits' };
const majorSubject2: MajorCredits = { credits: 4, __brand: 'MajorCredits' };
const minorSubject1: MinorCredits = { credits: 1, __brand: 'MinorCredits' };
const minorSubject2: MinorCredits = { credits: 2, __brand: 'MinorCredits' };

console.log(sumMajorCredits(majorSubject1, majorSubject2));
console.log(sumMinorCredits(minorSubject1, minorSubject2));
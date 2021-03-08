export class ArrayUtility
{
    static runArrayMethods() : void
    {
        document.getElementById('arrays')!.addEventListener('click', () => 
        {
            this.numbersMethod();
            this.namesMethod();
        });
    }
    
    private static numbersMethod() : void
    {
        console.log('--------------------------------------------------------')
        console.log('Numbers Arrays')
        console.log('--------------------------------------------------------')
        
        let numbers: number[] = [89,5,56,102,7];
        console.log(`Original Array: ${numbers}`);        
        let result = numbers.filter((element) => element > 50);
        console.log(`Numbers greater than '50': ${result}`);
        console.log();        


        let numbersTwo: number[] = [89,5,56,102,7];
        console.log(`Original Array: ${numbersTwo}`);        
        numbersTwo.pop();
        console.log(`After Removing Last Number: ${numbersTwo}`);
        console.log();
        
        let numbersThree: number[] = [89,5,56,102,7];
        console.log(`Original Array: ${numbersThree}`);        
        numbersThree.push(78);
        console.log(`After Pushing '78' To The Array: ${numbersThree}`);
        console.log();

        let numbersFour: number[] = [89,5,56,102,7];
        console.log(`Original Array: ${numbersFour}`);        
        console.log(`Index of number '5': ${numbersThree.indexOf(5)}`);
        console.log();
        
        let numbersFive: number[] = [89,5,56,102,7];
        console.log(`Original Array: ${numbersFive}`);        
        numbersFive.unshift(14, 67);
        console.log(`After adding '14' and '67' to the beginning: ${numbersFive}`);
        console.log();

        let numbersSix: number[] = [1, 2, 3];
        let letters: string[] = ['a', 'b', 'c'];
        console.log(`Original Arrays: ${numbersSix} \n${letters}`);        
        console.log(`After combining arrays: ${numbersSix.toString().concat(letters.toString())}`);
        console.log();

        console.log('--------------------------------------------------------')


    }

    private static namesMethod() : void
    {

        console.log('--------------------------------------------------------')
        console.log('Name Arrays')
        console.log('--------------------------------------------------------')
        let names: string[] = [ "John", "Sarah", "Beth", "Adam", "Peter"];
        console.log(`Original Array: ${names}`);
        names.splice(2, 2, "Cindy", "Zoe");
        console.log(`Array after replacing Beth and Adam: ${names}`);
        console.log();
        
        let namesTwo: string[] = [ "John", "Sarah", "Beth", "Adam", "Peter"];
        console.log(`Original Array: ${namesTwo}`);
        namesTwo.splice(3, 1);
        console.log(`Array after removing Adam: ${namesTwo}`)
        console.log();
        
        let namesThree: string[] = [ "John", "Sarah", "Beth", "Adam", "Peter"];
        console.log(`Original Array: ${namesThree}`);
        console.log(`Array after slice: ${namesThree.slice(1, 4)}`)
        console.log();
        console.log('--------------------------------------------------------')
    }
}

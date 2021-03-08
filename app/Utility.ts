import {Click} from './Click'
import {FormControl} from './FormControl'
import {Message} from './Message'

export class Utility
{

    private static getCheckboxValue() : boolean
    {

        const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById('terms'); 
     
        return inputElement.checked;
    }

    private static getInputValue(elementId: string) : string
    {
        const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementId);

        return inputElement.value;
    }


    static setOnClickEvent(elementID: string, clickedElement: Click) : void
    {
        const inputElement: HTMLInputElement = <HTMLInputElement>document.getElementById(elementID);

        if(clickedElement === Click.TERMS)
        {

            inputElement.addEventListener('click', () => 
            {

                if(this.getCheckboxValue())
                {
                    document.getElementById('register')!.removeAttribute('disabled');
                }
                else
                {
                    document.getElementById('register')!.setAttribute('disabled', 'true');
                }

            });
        }
        
        if(clickedElement === Click.REGISTER)
        {

            inputElement.addEventListener('click', () => {

                this.formValidation();
            });

        }
    }

    private static formValidation() : void
    {
        //declarations
        let fornames = this.getInputValue('fornames');
        let surname = this.getInputValue('surname');
        let nickname = this.getInputValue('nickname');
        let email = this.getInputValue('email');
        let password = this.getInputValue('password');
        let confirmPassword = this.getInputValue('confirmPassword');
        
        //validations
       this.validateForm(fornames, FormControl.FORNAMES);
       this.validateForm(surname, FormControl.SURNAME);
       this.validateForm(nickname, FormControl.NICKNAME);
       this.validateForm(email, FormControl.EMAIL);
       this.validateForm(password, FormControl.PASSWORD);
       this.validateForm(password, FormControl.CONFIRMPASSWORD, confirmPassword);
    }

    private static validateForm(inputValue: string, formControl: FormControl, confirmPassword?: string) : void
    {
    
        switch(formControl)
        {
            case FormControl.FORNAMES:
                {
                    //requied
                    if(inputValue.length === 0)
                    {
                        this.printMessage("Invalid Fornames", Message.ERROR);
                    }
                    else
                    {
                        this.printMessage("Forname Validated", Message.SUCCESS);
                    }

                    break;
                }
            
            case FormControl.SURNAME:
                {
                    //required
                    if(inputValue.length < 2)
                    {
                        this.printMessage("Invalid Surname", Message.ERROR);
                    }
                    else
                    {
                        this.printMessage("Surname Validated", Message.SUCCESS);
                    }

                    break;
                }

            case FormControl.NICKNAME:
                {
                    //not required
                    break;
                }

            case FormControl.EMAIL:
                {

                    let reg = /@/gi;

                    if(inputValue.length < 4 || inputValue.search(reg) === -1)
                    {
                        this.printMessage("Invalid Email", Message.ERROR);
                    }
                    else
                    {
                        this.printMessage("Email Validated", Message.SUCCESS);
                    }

                    break;
                }

            case FormControl.PASSWORD:
                {

                    if(inputValue.length < 4)
                    {
                        this.printMessage("Invalid Password", Message.ERROR);
                    }
                    else
                    {
                        this.printMessage("Password Validated", Message.SUCCESS);
                    }

                    break;
                }

            case FormControl.CONFIRMPASSWORD:
                {

                    //validate passwords
                    if(inputValue.length > 0)
                    {
                        if(inputValue === confirmPassword)
                        {
                            this.printMessage("Confirm Password Validated", Message.SUCCESS);
                        }
                        else
                        {
                            this.printMessage("Confirm Password does not match Password", Message.ERROR);
                        }     
                    }
                    

                    break;
                }
        }
        
    }


    private static printMessage(message: string, messageInfo: Message) : void
    {
        if(messageInfo === Message.SUCCESS)
        {
            console.log(message);
        }
        else
        {
            console.error(message);
        }
    }

}
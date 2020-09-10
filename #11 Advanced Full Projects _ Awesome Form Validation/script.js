Vue.component('signUpForm', {
    template: '#signUpForm',

    data() {
        return {
            password: '',
            confirmPassword: '',
            email: '',
            msg: [],
            disableSubmitButton: true
        }
    },

    watch: {
        email(value){
            this.eventName();//console.log(name);
            this.email = value;
            this.checkEmail(value);
        },

        password(value){
            this.eventName();
            this.password = value;
            this.checkPassword(value);
        },

        confirmPassword(value){
            this.eventName();
            this.confirmPassword = value;
            this.checkConfirmPassword(value);
        }
    },

    methods: {
        changeToTerms(){
            this.$emit('change', 'termsCondition');
        },

        checkEmail(value){
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
            {
                //this.msg['email'] = '';
                this.msg[name] = '';
            }
            else{
                // this.msg['email'] = 'Keep Typing... We are waiting for correct Email';
                this.msg[name] = 'Keep Typing... We are waiting for correct Email';
            }
        },

        checkPassword(value){
            this.passwordLengthCheck(value);
        },

        checkConfirmPassword(value){
            if(this.passwordLengthCheck(value))
            {
                if(value == this.password)
                {
                    //console.log('match');
                    this.msg[name] = '';
                    this.disableSubmitButton = false;
                }
                else
                {
                    this.msg[name] = 'Password does not match, please try again';
                }
            }
        },

        passwordLengthCheck(passwordToCheck){
            remainingchars = 6 - passwordToCheck.length;

            if(passwordToCheck.length < 6)
            {
                // this.msg['password'] = 'Password must contain 6 characters. ' + remainingchars + ' more to go...';
                this.msg[name] = 'Password must contain 6 characters. ' + remainingchars + ' more to go...';
            }
            else
            {
                // this.msg['password'] = '';
                this.msg[name] = '';
                
                return true;
            }
        },

        eventName(){
            name = event.target.name;
        },

        submit(){
            alert('Form submitted successfully !');
        }
    },
});

Vue.component('termsCondition', {
    template: '#termsCondition',

    methods: {
        backToSignUp(){
            this.$emit('change', 'signUpForm');
        }
    },
});

new Vue({
    
    el: '#app',

    data: {
        componentName: 'signUpForm'
    },

    methods: {
        change(newComp){
            this.componentName = newComp;
        }
    },
});
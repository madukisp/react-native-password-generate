export default function generatePass(){
    let password: string = '';
    let characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*';
    let passwordLength: number = 8;

    for ( let i = 0; i < 8; i++ ) {
        password += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );
    }
    return password;
}
import { scrypt, randomBytes } from 'crypto'
import { promisify } from 'util'

const scryptAsync = promisify(scrypt)


export class Password {

    static async toHash(password: string) {
        // generate random string
        const salt = randomBytes(8).toString('hex')
        //generate buffer and hash the password
        const buf = (await scryptAsync(password, salt, 64)) as Buffer
        // return the hashed password with the salt
        return `${buf.toString('hex')}.${salt}`



    }

    static async comparePassword(storedPassword: string, suppliedPassword: string) {
        const [hashedPassword, salt] = storedPassword.split('.')

         // hash the supplied password with the same salt
        const buf = (await scryptAsync(suppliedPassword, salt, 64)) as Buffer

        return buf.toString('hex') === hashedPassword
    }
}
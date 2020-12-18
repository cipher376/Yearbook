import { Address } from './address';
import { Alumni } from './alumni';
import { Photo } from './my-media';


export interface CredentialsInterface {
  id?: number;
  email: string;
  phone?: string;
  password?: string;
  realm?: string;
  remember?: boolean;
}

export class Credentials implements CredentialsInterface {
  id?: number;
  email: string;
  phone?: string;
  password?: string;
  realm?: string;
  remember?: boolean;

  constructor(cred?: CredentialsInterface) {
    Object.assign(this, cred);
  }
}


export interface UserInterface {
  id?: number;
  firstName: string;
  lastName: string;
  nickName?: string;
  userName?: string;
  otherName?: string;
  dateOfBirth?: Date;
  gender?: string;

  photos?: Photo[];
  address?: Address;
  alumni: Alumni[];
}


export class User implements UserInterface {
  id?: number;
  private fullName?: string;
  firstName: string;
  lastName: string;
  otherName?: string;
  nickName?: string;
  userName?: string;
  dateOfBirth?: Date;
  gender?: string;

  email?: string;
  phone?: string;
  password?: string;
  realm?: string;
  remember?: boolean;

  /************Relations**********/
  photos?: Photo[];
  address?: Address;
  alumni: Alumni[];

  constructor(userData?: UserInterface, cred?: Credentials) {
    if (userData) {
      this.id = userData.id;
      this.fullName = userData.firstName + ' ' + userData.lastName;
      this.firstName = userData.firstName;
      this.lastName = userData.lastName;
      this.dateOfBirth = userData.dateOfBirth;
      this.nickName = userData.nickName;
      this.userName = userData.userName;

      this.photos = userData.photos || [];
      this.address = userData.address;
      this.alumni = userData.alumni || [];
    

    }
    if (cred) {
      this.password = cred.password;
      this.realm = cred.realm;
      this.remember = cred.remember;
      this.email = cred.email;
      this.realm = cred.realm;
      this.phone = cred.phone;
    }

  }
  get FullName() {
    this.fullName = '';
    this.fullName += this.firstName || '';
    this.fullName += ' ';
    this.fullName += this.lastName || '';
    this.fullName += ' ';
    this.fullName += this.otherName || '';
    // console.log(this.fullName);
    if (this.fullName == ' ') { this.fullName = null; }
    return this.fullName;
  }
  set FullName(name: string) {
    this.fullName = name;
    try {
      const nameArray = this.fullName.split(' ');
      if (nameArray?.length > 0) {
        this.firstName = nameArray[0];
      }
      if (nameArray?.length > 1) {
        this.lastName = nameArray[1];
      }
      if (nameArray?.length > 2) {
        this.otherName = nameArray[2];
      }
    } catch (error) {

    }
  }

  get Info(): UserInterface | CredentialsInterface {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      phone: this.phone,
      firstName: this.firstName,
      lastName: this.lastName,
      otherName: this.otherName,
      dateOfBirth: this.dateOfBirth,
      gender: this.gender
    };
  }

  get UpdateInfo(): UserInterface | CredentialsInterface {
    return {
      id: this.id,
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      otherName: this.otherName,
      dateOfBirth: this.dateOfBirth,
      gender: this.gender
    };
  }
}

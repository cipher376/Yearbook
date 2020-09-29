// import { Injectable } from '@angular/core';
// import { PaymentMethod, fameConfig } from '../../interfaces/interface';
// import { TicketApi, PurchasedTicketApi, PurchasedTicket, Ticket } from '../sdk';
// import { UserService } from './user.service';
// import { SHA3 } from 'sha3';
// import { catchError, map  } from 'rxjs/operators';
// import { throwError } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class TicketService {
//   _MOBILE_PAYMENT_METHODS = ['MTN Mobile Money', 'Vodafone Cash', 'AirtelTigo Money'];
//   _TICKET_TYPES = ['Regular', 'Premium', 'VIP', 'Special Offer'];
//   _CURRENCIES = ['GHC', 'USD', 'Euro'];


//   constructor(
//     private _ticketApi: TicketApi,
//     private _purchaseApi: PurchasedTicketApi,
//     private _userService: UserService
//   ) { }

//   /*************Returns array of payment methods of ticket template******** */
//   formatPaymentMethod(methods: PaymentMethod[]) {
//     const methodNames = [];
//     methods.forEach(method => {
//       methodNames.push(method.name);
//     });
//     return methodNames;
//   }


//   /*************Returns string array of payment methods of ticket template******** */
//   paymentMethodToString(methods: PaymentMethod[]) {
//     const methodNames = [];
//     methods.forEach(method => {
//       if (method.name === 'Mobile Transaction') {
//         methodNames.push(' ' + method.details);
//       } else {
//         methodNames.push(' ' + method.name);
//       }
//     });
//     return methodNames;
//   }
//   // return strings of all the payment methods without duplications
//   allPaymentMethodToString(tickets: Ticket[]) {
//     const methods: string[] = [];
//     if (tickets && tickets.length > 0) {
//       tickets.forEach(ticket => {
//         ticket.paymentMethods.forEach((meth: PaymentMethod) => {
//           if (!methods.includes(meth.details)) {
//             methods.push(meth.details);
//           }
//         });
//       });
//     }
//     return methods;
//   }

//   /*************Returns string array of selected mobile payment methods******** */
//   formatMobilePaymentMethods(methods: PaymentMethod[]) {
//     const methodNames = [];
//     methods.forEach(method => {
//       if (this._MOBILE_PAYMENT_METHODS.includes(method.details)) {
//         methodNames.push(method.details);
//       }
//     });
//     return methodNames;
//   }
//   /*************Returns paymentmethod object by searching with name******** */
//   getMethodByName(details: string, methods: PaymentMethod[]) {
//     let meth = null;
//     methods.forEach(method => {
//       if (method.details === details || method.name === details) {
//         meth = method;
//       }
//     });
//     return meth;
//   }

//   /*************Buy new ticket ******** */
//   purchaseTicket(purchase: PurchasedTicket) {
//     return this._purchaseApi.patchOrCreate(purchase).pipe(
//       map(res => {
//         return res;
//       }),
//       catchError(e => this.handleError(e))
//     );
//   }

//   deleteTicket(id: string) {
//     return this._ticketApi.deleteById(id).pipe(
//       map(res => {
//         return res;
//       }),
//       catchError(e => this.handleError(e))
//     );
//   }
//   /*************Allow ticket template to be display to the public or not ******** */
//   toggleTicket(ticket: Ticket) {
//     if (ticket.isHidden) {
//       ticket.isHidden = false;
//     } else {
//       ticket.isHidden = true;
//     }

//     return this._ticketApi.patchOrCreate(ticket).pipe(
//       map(res => {
//         return res;
//       }),
//       catchError(e => this.handleError(e))
//     );
//   }


//   /*************Delete purchase ticket ******** */
//   deletePurchaseTicket(id: string) {
//     return this._purchaseApi.deleteById(id).pipe(
//       map(res => {
//         return res;
//       }),
//       catchError(e => this.handleError(e))
//     );
//   }

//   /************************Filter tickets with key**************************************** */
//   // Perfroms general search for tickets on client device
//   filterTickets(key: string, tickets: Ticket[]): Ticket[] {
//     const ticketToReturn: Ticket[] = [];
//     for (const tk of tickets) {
//       // if(tk.)
//     }
//     return ticketToReturn;
//   }

//   filterPurchasedTickets(key: string, tickets: PurchasedTicket[]): PurchasedTicket[] {
//     key = key.toLowerCase().trim();
//     const ticketToReturn: PurchasedTicket[] = [];
//     for (const tk of tickets) {
//       if (this.searchTicket(key, tk.ticket) ||
//         this._userService.searchFameUser(key, tk.buyer) ||
//         this._userService.searchFameUser(key, tk.owner)) {
//         ticketToReturn.push(tk);
//         continue;
//       }
//       if (
//         (tk.payment_phone && tk.payment_phone.toString().trim().search(key) > -1) ||
//         (tk.personal_phone && tk.personal_phone.toString().trim().search(key) > -1)
//       ) {
//         ticketToReturn.push(tk);
//         continue;
//       }


//     }
//     console.log(ticketToReturn);
//     return ticketToReturn;
//   }

//   filterProcessedPurchaseTickets(tickets: PurchasedTicket[]): PurchasedTicket[][] {
//     if (!tickets || tickets.length < 1) {
//       console.log("array empty");
//       return [[], []];
//     }
//     const tkVerified: PurchasedTicket[] = [];
//     const tkUnverified: PurchasedTicket[] = [];
//     tickets.forEach(tk => {
//       if (tk.isVerified) {
//         tkVerified.push(tk);
//       } else {
//         tkUnverified.push(tk);
//       }
//     });
//     return [tkVerified, tkUnverified];
//   }

//   searchTicket(key: string, ticket: Ticket) {
//     key = key.trim().toLowerCase();

//     if (ticket) {
//       if (
//         (ticket.amount && ticket.amount.toString().trim().toLowerCase().search(key) > -1) ||
//         (ticket.currency && ticket.currency.toString().trim().toLowerCase().search(key) > -1) ||
//         (ticket.dateCreated && ticket.dateCreated.toString().trim().toLowerCase().search(key) > -1) ||
//         (ticket.dateModified && ticket.dateModified.toString().trim().toLowerCase().search(key) > -1) ||
//         (ticket.description && ticket.description.toString().trim().toLowerCase().search(key) > -1) ||
//         (ticket.isCouple && ticket.isCouple.toString().trim().toLowerCase().search(key) > -1) ||
//         (ticket.isHidden && ticket.isHidden.toString().trim().toLowerCase().search(key) > -1) ||
//         (ticket.sign && ticket.sign.toString().trim().toLowerCase().search(key) > -1) ||
//         (ticket.type && ticket.type.toString().trim().toLowerCase().search(key) > -1)
//       ) {
//         return true;
//       }

//       if (ticket.paymentMethods && ticket.paymentMethods.length > 0) {
//         const methods: PaymentMethod[] = ticket.paymentMethods;
//         let found = false;
//         methods.forEach(method => {
//           if (
//             (method.details && method.details.toString().trim().toLowerCase().search(key) > -1) ||
//             (method.number && method.number.toString().trim().toLowerCase().search(key) > -1) ||
//             (method.name && method.name.toString().trim().toLowerCase().search(key) > -1)
//           ) {
//             found = true;
//             return;
//           }
//         });
//         return found;
//       }

//     }
//     return false;
//   }

//   /***************************Fetch 100 purchased tickets at a time *********************/
//   fetchPurchasedTicketsByTicketId(ticketId: string, limit = 100) {
//     const filter = {
//       order: 'id ASC',
//       limit: limit,
//       where: {
//         ticketId: ticketId,
//       },
//       include: [
//         { relation: 'buyer' },
//         { relation: 'owner' },
//         { relation: 'photo' },
//         { relation: 'partner' },
//         { relation: 'ticket' },
//       ],
//     };
//     return this._purchaseApi.find<PurchasedTicket>(filter).pipe(
//       map(res => {
//         console.log(res);
//         return res;
//       })
//     );
//   }

//   /***************************Fetch authenticated ticket *********************/
//   fetchPurchasedTicketsByTicketHash(hash: string) {
//     const filter = {
//       where: {
//         hash: hash,
//       },
//       include: [
//         { relation: 'buyer' },
//         { relation: 'owner' },
//         { relation: 'photo' },
//         { relation: 'partner' },
//         { relation: 'ticket' },
//       ],
//     };
//     return this._purchaseApi.findOne<PurchasedTicket>(filter).pipe(
//       map(res => {
//         console.log(res);
//         return res;
//       })
//     );
//   }

//   generatePurchaseTicketHash(pTicket: PurchasedTicket) {
//     const hash = new SHA3(512);
//     try {
//       const id = pTicket.payment_phone + pTicket.buyerId + pTicket.ownerId + pTicket.ticketId + pTicket.ticket.secreteCode;
//       hash.update(id);
//       return hash.digest('hex');
//     } catch (error) {
//       return;
//     }
//   }

//   /************Mark remote ticket as verifed or not****** */
//   toggleVerify(pTicket: PurchasedTicket) {
//     if (!pTicket) {
//       console.log(pTicket);
//       return undefined;
//     }
//     if (pTicket.isVerified) {
//       pTicket.isVerified = false;
//       pTicket.hash = '';
//     } else {
//       pTicket.isVerified = true;
//       // update the ticket hash
//       const hash = this.generatePurchaseTicketHash(pTicket);
//       pTicket.hash = hash ? hash : '';
//     }

//     return this._purchaseApi.patchOrCreate(pTicket).pipe(
//       map(res => {
//         console.log(res);
//         return res;
//       })
//     );
//   }


//   // *** returns ticket cover pics
//   getTicketDefaultCover(ticket: Ticket) {
//     if (ticket && ticket.type) {
//       switch (ticket.type) {
//         case 'Regular':
//           return fameConfig.defaultRegularTicketCover;
//         case 'Premium':
//           return fameConfig.defaultPremiumTicketCover;
//         case 'VIP':
//           return fameConfig.defaultVipTicketCover;
//         case 'Special Offer':
//           return fameConfig.defaultSpecialTicketCover;
//         default:
//           return fameConfig.defaultUnknownTicketCover;
//       }
//     }
//     return fameConfig.defaultUnknownTicketCover;
//   }



//   handleError(e: any): any {
//     console.log(e);
//     if (e.error instanceof ErrorEvent) {
//       // A client-side or network error occurred. Handle it accordingly.
//       console.error('An error occurred:', e.error.message);
//       console.log('No connection');
//     } else {
//       // The backend returned an unsuccessful response code.
//       // The response body may contain clues as to what went wrong,
//       console.error(
//         `Backend returned code ${e.status}, ` + `body was: ${e.code}`
//       );
//     }
//     // return an observable with a user-facing error message
//     return throwError('System error, please report to: antiamoah890@gmail.com');
//   }

// }

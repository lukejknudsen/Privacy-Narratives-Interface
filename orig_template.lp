
#const max_people=5.
#const min_knows=1.
#const max_knows=2.
phone_number(1..max_people).
1 { phone_number(Person, N): phone_number(N) } :- person(Person).
:- phone_number(P1, N), phone_number(P2, N), P1!=P2.
min_knows { knows(P1, P2): person(P2), P2!=P1 } max_knows :- person(P1).
phone_number(bob, 2).
% A person can choose to sign up if they are not already a user
% and have a phone number
possible(I, action(signup, P), al(P)) :-
    id(I),
    person(P),
    phone_number(P, _),
    strong_notholds(I, user(P)).
% This makes the person a user
initiates(I, A, user(P)) :-
    happens(I, A, al(P)),
    A=action(signup, P).
% And it adds their phone number to their profile
initiates(I, A, profile(P, N)) :-
    happens(I, A, al(P)),
    phone_number(P, N),
    A=action(signup, P).
% A person can choose to add the phone number of a person they know to their phonebook,
% regardless of if they are a user
possible(I, action(save_contact, P1, N), al(P1)) :-
    id(I),
    person(P1),
    phone_number(P2, N),
    knows(P1, P2),
    strong_notholds(I, phonebook(P1, N)).
initiates(I, A, phonebook(P1, N)) :-
    happens(I, A, al(P1)),
    A=action(save_contact, P1, N).
% A person may share photos with someone else who is a user
possible(I, action(share_photos, P1, P2), al(P1)) :-
    strong_holds(I, user(P1)),
    strong_holds(I, user(P2)).
initiates(I, A, photos_shared(P1, P2)) :-
    happens(I, A, al(P1)),
    A=action(share_photos, P1, P2).
% A person may message someone who is in their phonebook
possible(I, action(send_message, P1, P2), al(P1)) :-
    person(P2),
    strong_holds(I, phonebook(P1, N)),
    phone_number(P2, N).
initiates(I, A, texted(P1, P2)) :-
    happens(I, A, al(P1)),
    A=action(send_message, P1, P2).
strong_notholds(start, user(P)) :- person(P).
strong_notholds(start, phonebook(P, N)) :- person(P), phone_number(N).
% %% UI output example:
% person(alice).
% person(bob).
% person(charlie).
% unintentional(alice).
% unintentional(bob).
% unintentional(charlie).
% :- not strong_holds(end, photos_shared(alice, bob)).
% totalorder.
%% UI output example with intention:
person(alice).
person(bob).
person(charlie).
unintentional(bob).
unintentional(charlie).
intends(start, photos_shared(alice, bob), alice).
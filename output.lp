happens(1, action(sign_up, alice), al(alice)).
happens(2, action(sign_up, bob), al(bob)).
edge(1,2).
after(2,1).
before(1,2).
happens(3, action(sign_up, charlie), al(charlie)).
edge(2,3).
after(3,2).
before(2,3).
happens(4, action(save_contact, bob, alice), al(bob)).
edge(3,4).
after(4,3).
before(3,4).
happens(5, action(show_suggestion, alice, bob), al(alice)).
edge(4,5).
after(5,4).
before(4,5).
happens(6, action(save_contact, charlie, bob), al(charlie)).
edge(5,6).
after(6,5).
before(5,6).
#const tmax=9.
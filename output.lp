happens(1, action(sign_up, alice), al(alice)).
happens(2, action(sign_up, bob), al(bob)).
edge(1,2).
after(2,1).
before(1,2).
#const tmax=5.
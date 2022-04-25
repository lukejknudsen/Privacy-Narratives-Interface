happens(1, action(sign_up, luke), al(luke)).
happens(2, action(sign_up, chinmaya), al(chinmaya)).
edge(1,2).
after(2,1).
before(1,2).
happens(3, action(sign_up, chris), al(chris)).
edge(2,3).
after(3,2).
before(2,3).
happens(4, action(save_contact, chinmaya, 000-000-0000), al(chinmaya)).
edge(3,4).
after(4,3).
before(3,4).
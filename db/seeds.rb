# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Category.destroy_all
Dance.destroy_all


u1 = User.create(username: "Admin", email: "admin@email.com", password: "123456")
u2 = User.create(username: "Bob", email: "bob@email.com", password: "123457")
u3 = User.create(username: "Suzy", email: "suzy@email.com", password: "123458")
u4 = User.create(username: "Stefan", email: "stefan@email.com", password: "123459")
u5 = User.create(username: "Lola", email: "lolan@email.com", password: "123451")
u6 = User.create(username: "Leila", email: "leila@email.com", password: "123452")

p "#{User.count} user(s) created"

t1 = Category.create(title: "Modern")
Dance.create(name: "Contemporary level 1", description: "The beach of Ipanema is known for its elegant development and its social life.", image: "https://images.unsplash.com/photo-1526515579900-98518e7862cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2682&q=80", category_id: t1.id, user_id: u1.id)
Dance.create(name: "Contemporary easy", description: "The western coastline contains the island's finest beaches.", image: "https://images.unsplash.com/photo-1568557412763-da2269c2ebb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2133&q=80", category_id: t1.id, user_id: u1.id)
Dance.create(name: "Modern Pro", description: "An elite destination famous for its white sand beaches", image: "https://images.unsplash.com/photo-1568557412763-da2269c2ebb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2133&q=80", category_id: t1.id, user_id: u1.id)

t2 = Category.create(title: "Classy")
Dance.create(name: "Ballet", description: "Machu Picchu was built around 1450, at the height of the Inca Empire.", image: "https://images.unsplash.com/photo-1519428291967-dbcd20a2468b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=974&q=80", category_id: t2.id, user_id: u1.id)
Dance.create(name: "Ballet beginners", description: "Dunrobin Castle is a stately home in Sutherland. Its origins lie in the Middle Ages.", image: "https://images.unsplash.com/photo-1528808302-cddd825c94fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2706&q=80", category_id: t2.id, user_id: u1.id)
Dance.create(name: "Ballet workout, not a ballet", description: "The meeting place of the two houses of the Parliament of the United Kingdom", image: "https://images.unsplash.com/photo-1586790167861-6e87cdff91b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80", category_id: t2.id, user_id: u1.id)

t3 = Category.create(title: "Retro")
Dance.create(name: "Lambada", description: "The Dolomites are a mountain range located in northeastern Italy famous for skiing in the winter months.", image: "https://images.unsplash.com/photo-1551980349-75d992b49c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", category_id: t3.id, user_id: u1.id)
Dance.create(name: "Swing", description: "It was the site of the first Winter Olympics in 1924", image: "https://images.unsplash.com/photo-1551980349-75d992b49c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", category_id: t3.id, user_id: u1.id)
Dance.create(name: "Disco", description: "The second largest single mountain ski resort in the United States", image: "https://images.unsplash.com/photo-1551980349-75d992b49c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", category_id: t3.id, user_id: u1.id)

t4 = Category.create(title: "Yoga")
Dance.create(name: "Vinyassa", description: "A surf reef break located in Hawai notorious for huge waves.", image: "https://images.unsplash.com/photo-1526718583451-e88ebf774771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80", category_id: t4.id, user_id: u2.id)
Dance.create(name: "Cats yoga", description: "A hilly climbing area and national park in Saxony, Germany.", image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80", category_id: t4.id, user_id: u6.id)
Dance.create(name: "Dogs Yoga", description: "Striking natural surroundings near a volcano and several lakes, nature reserves and thermal baths.", image: "https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80", category_id: t4.id, user_id: u5.id)

t5 = Category.create(title: "Fitness")
Dance.create(name: "Zumba", description: "A museum dedicated to human history and culture, with over 8 million works.", image: "https://images.unsplash.com/photo-1540537662076-b3ea42098dfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80", category_id: t5.id, user_id: u3.id)
Dance.create(name: "Strech it out", description: "Houses over 3,700 animals of more than 650 species and subspecies.", image: "https://images.unsplash.com/photo-1515656155825-0a2ad654a360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3217&q=80", category_id: t5.id, user_id: u3.id)
Dance.create(name: "Body Conditioning", description: "The most visited urban park in the US as well as one of the most filmed locations in the world.", image: "https://images.unsplash.com/photo-1515656155825-0a2ad654a360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3217&q=80", category_id: t5.id, user_id: u4.id)
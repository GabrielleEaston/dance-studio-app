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
Dance.create(name: "Contemporary level 1", description: "Contemporary dance is a style of expressive dance that combines elements of several dance genres including modern, jazz, lyrical and classical ballet.", image: "https://images.unsplash.com/photo-1526515579900-98518e7862cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2682&q=80", category_id: t1.id, user_id: u1.id)
Dance.create(name: "Contemporary easy", description: "Hip hop with Leica infuses styles of street jazz, ballroom, and grooves. The end goal is to always make her students feel strong, confident, and sexy with the skin they’re in!", image: "https://images.unsplash.com/photo-1568557412763-da2269c2ebb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2133&q=80", category_id: t1.id, user_id: u1.id)
Dance.create(name: "Modern Pro", description: "We will begin with a warm-up including floor work, spinal articulation and plies, footwork, drop swings, adagio and battlement swings. Then we will do a short 1-minute combo. Dancers need at least 2 years of training. Class is very stationary but a 10x10 space would be best if possible.", image: "https://images.unsplash.com/photo-1568557412763-da2269c2ebb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2133&q=80", category_id: t1.id, user_id: u1.id)

t2 = Category.create(title: "Classy")
Dance.create(name: "Ballet", description: "Ballet is a type of performance dance that originated during the Italian Renaissance in the fifteenth century and later developed into a concert dance form in France and Russia. ", image: "https://images.unsplash.com/photo-1519428291967-dbcd20a2468b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=974&q=80", category_id: t2.id, user_id: u1.id)
Dance.create(name: "Ballet beginners", description: "Ballet is a beautiful art form to use for self expression or to stay fit. While taking a dance class is the best way to learn ballet, you can do basic ballet moves at home if you can't take classes or if you just want extra practice. Before you dance, warm up and stretch so your body is ready", image: "https://images.unsplash.com/photo-1528808302-cddd825c94fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=2706&q=80", category_id: t2.id, user_id: u1.id)
Dance.create(name: "Ballet workout, not a ballet", description: "Ballet is a beautiful art form to use for self expression or to stay fit. While taking a dance class is the best way to learn ballet, you can do basic ballet moves at home if you can't take classes or if you just want extra practice. Before you dance, warm up and stretch so your body is ready", image: "https://images.unsplash.com/photo-1586790167861-6e87cdff91b9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80", category_id: t2.id, user_id: u1.id)

t3 = Category.create(title: "Retro")
Dance.create(name: "Lambada", description: "The association of Lambada and the idea of 'dirty dancing' became quite extensive. The appellative forbidden dance was and is often ascribed to the Lambada.", image: "https://images.unsplash.com/photo-1551980349-75d992b49c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", category_id: t3.id, user_id: u1.id)
Dance.create(name: "Swing", description: "Swing dancing is a popular social dance that is often characterized by lifts, spins and flips. It's generally upbeat, lively and a lot of fun to watch—and to dance!", image: "https://images.unsplash.com/photo-1551980349-75d992b49c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", category_id: t3.id, user_id: u1.id)
Dance.create(name: "Disco", description: "Disco dance is a style of dance highly dependent on disco music. Disco music consists of strong, rising vocals over a steady beat and bass line", image: "https://images.unsplash.com/photo-1551980349-75d992b49c86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", category_id: t3.id, user_id: u1.id)

t4 = Category.create(title: "Yoga")
Dance.create(name: "Vinyassa", description: "Vinyasa is a style of yoga characterized by stringing postures together so that you move from one to another, seamlessly, using breath.", image: "https://images.unsplash.com/photo-1526718583451-e88ebf774771?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80", category_id: t4.id, user_id: u2.id)
Dance.create(name: "Cats yoga", description: "Cat yoga! Pet lovers who practice yoga with cats is a booming trend, and it's great for both humans and their furry companions!", image: "https://images.unsplash.com/photo-1571566882372-1598d88abd90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80", category_id: t4.id, user_id: u6.id)
Dance.create(name: "Dogs Yoga", description: "Doga is the practice of yoga as exercise with pet dogs.Doga teachers have noted the seemingly enlightened nature of dogs and the benefits of exercise. LOL", image: "https://images.unsplash.com/photo-1560743641-3914f2c45636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1233&q=80", category_id: t4.id, user_id: u5.id)

t5 = Category.create(title: "Fitness")
Dance.create(name: "Zumba", description: "Zumba is an exercise fitness program created by Colombian dancer and choreographer Alberto Beto Perez during the 1990s. Zumba involves dance and aerobic movements performed to energetic music. ", image: "https://images.unsplash.com/photo-1540537662076-b3ea42098dfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80", category_id: t5.id, user_id: u3.id)
Dance.create(name: "Strech it out", description: "Stretch classes, as the name suggests, are all about setting aside dedicated time to stretch your muscles.", image: "https://images.unsplash.com/photo-1515656155825-0a2ad654a360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3217&q=80", category_id: t5.id, user_id: u3.id)
Dance.create(name: "Body Conditioning", description: "Body Conditioning is a whole body workout that can improve your overall fitness. Body Conditioning classes can help you on your way to get in great shape and feel great about your body", image: "https://images.unsplash.com/photo-1515656155825-0a2ad654a360?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3217&q=80", category_id: t5.id, user_id: u4.id)
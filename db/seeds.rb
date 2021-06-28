# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Task.create(title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in imperdiet lacus. Nulla sodales, tortor ac bibendum blandit, purus neque aliquet metus, vitae finibus ex felis sed urna. Fusce aliquet purus metus, vitae congue nulla pharetra eu. Nulla quis laoreet sem, at egestas dui.', completed: false, due_date: DateTime.new(2021, 8, 29, 22, 35, 0) )

Task.create(title: 'Proin sit amet libero et libero consequat pharetra.', description: 'Nunc feugiat sollicitudin aliquet.', completed: true, due_date: DateTime.new(2021, 5, 29, 10, 35, 0))

Task.create(title: 'Etiam a diam vitae odio viverra varius.', description: 'Nulla gravida tincidunt velit, id ultricies neque mattis ac. Fusce mollis porta enim.', completed: false, due_date: DateTime.new(2021, 7, 10, 12, 45, 0))

Task.create(title: 'Duis consectetur risus sed vestibulum ultrices.', description: 'Nunc luctus pretium tincidunt.', completed: false, due_date: DateTime.new(2021, 4, 15, 10, 35, 0))

Task.create(title: 'Fusce consequat tortor sed tincidunt efficitur.', description: 'Suspendisse non ex molestie nunc imperdiet efficitur ut quis enim.', completed: false, due_date: DateTime.new(2021, 9, 12, 10, 25, 0))

Task.create(title: 'Fusce quis quam sit amet leo suscipit feugiat.', description: 'Maecenas a ante turpis. ', completed: true, due_date: DateTime.new(2021, 2, 12, 16, 10, 0))

Task.create(title: 'Fusce in purus venenatis, cursus nunc eget, aliquet libero.', description: 'Sed congue ultrices sapien nec vulputate.', completed: false, due_date: DateTime.new(2021, 7, 12, 22, 35, 0))



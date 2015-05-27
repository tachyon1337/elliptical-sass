Gem::Specification.new do |spec|
  # Release Info
  spec.version = File.read(File.join(File.dirname(__FILE__), "VERSION"))
  spec.date = "2015-05-26"

  # Project Details
  spec.name = "elliptical-sass"
  spec.authors = ["S. Francis"]
  spec.summary = "Elliptical Sass Gem"
  spec.description = "Sass library for elliptical web components"
  spec.email = "sfrancis@misinteractive.com"
  spec.homepage = "https://github.com/tachyon1337"
  spec.license = "MIT"

  # Gem Files
  spec.files += Dir.glob("stylesheets/**/*.*")


end
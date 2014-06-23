module.exports = function(grunt) {
	grunt.initConfig({
		
		requirejs: {
			compile: {
				options: {
					baseUrl: "js",
					name: "lib/require.min",
					paths: {
						jquery: 'lib/jquery.min',
						pubsub: 'lib/pubsub.min'
					},
					include: ['main'],
					out: "main.built.js",
					optimize: 'none'
				}
			}
		},

		connect: {
			dev: {
				options: {
					hostname: '0.0.0.0',
					port: 3000,
					base: '.',
					livereload: true
				}
			}
		},

		watch: {
			options: {
				livereload: true,
				spawn: false
			},

			assemble: {
				files: ['*.html', '*.hbs'],
				tasks: ['generateHtml']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
};
module.exports = function(grunt) {
	grunt.initConfig({
		
		requirejs: {
			options: {
				baseUrl: "js",
				name: "lib/require.min",
				paths: {
					jquery: 'lib/jquery.min',
					pubsub: 'lib/pubsub.min'
				},
				include: ['main'],
				out: "main.built.js"
			},
			dev: {
				options: {
					optimize: 'none'
				}
			},
			release: {
				options: {
					optimize: 'uglify2'
				}
			}
		},

		connect: {
			dev: {
				options: {
					hostname: '0.0.0.0',
					port: 8800,
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

			js: {
				files: ['js/**/*.js'],
				tasks: ['requirejs:dev']
			}
		}
	});

	grunt.registerTask('default', ['requirejs:release']);
	grunt.registerTask('dev', ['requirejs:dev', 'connect', 'watch']);

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
};
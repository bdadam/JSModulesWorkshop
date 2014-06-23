module.exports = function(grunt) {
	grunt.initConfig({
		assemble: {
			options: {
			},
			project: {
				options: {
					layout: false,
					partials: ['*.hbs', '*.html']
				},
				files: {
					'index.html': ["index.hbs" ]
				}
			}
		},

		prettify: {
			options: {
				unformatted: ['code', 'pre', 'section']
			},
			html: {
				files: {
					'index.html': ['index.html']
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

	grunt.loadNpmTasks('assemble');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-prettify');

	//grunt.registerTask('generateHtml', ['assemble', 'prettify']);
	grunt.registerTask('generateHtml', ['assemble']);
	grunt.registerTask('default', ['generateHtml', 'connect', 'watch']);
};
module.exports = function(grunt) {

	grunt.initConfig({
		browserify: {
			options: {
				watch: true
			},

			js: {
				options: {
					//transform: ['uglifyify']
				},
				files: {
					'build/main.js': 'src/main.js'
				}	
			},
			
			specs: {
				options: {
					bundleOptions: {
						debug: true
					}
				},
				files: {
					'build/specs.js': 'specs/**/*.js'
				}
			},
		},

		clean: {
			all: ['build/*']
		},

		jasmine: {
			dev: {
				src: 'build/main.js',
				options: {
					specs: 'build/specs.js',
					display: 'short',
					summary: true
				}
			}
		},

		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true,
				node: true,
				globals: {},
			},
			all: ['src/**/*.js']
		},

		uglify: {
			dist: {
				files: {
					'build/main.min.js': ['build/main.js']
				}
			}
		},

		watch: {
			options: {},
			js: {
				files: ['build/**/*.js'],
				tasks: ['jshint', 'jasmine'],
				options: {
					spawn: false,
				},
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['clean', 'jshint', 'browserify', 'jasmine', 'watch']);
	grunt.registerTask('dist', ['clean', 'jshint', 'browserify', 'jasmine', 'uglify']);
};
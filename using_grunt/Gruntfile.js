module.exports = function(grunt){
	grunt.initConfig({
		dust: {
			build: {
				expand: true,
				cwd: "dust",
				src: "*",
				dest: "dist",
				ext: ".js",
				filter: "isFile"
			}
		},
		
		watch: {
			files: ['dust/**/*.dust'],
			tasks: ['dust', 'concat']
		},

		concat: {
			dist: {
				src: ['dist/*.js'],
				dest: 'built.js',
			}
		}
	});

	grunt.loadNpmTasks('grunt-dustjs-linkedin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['dust', 'concat']);
};
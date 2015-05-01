var pkgjson = require('./package.json')

var config = {
	pkg: pkgjson,
	app: 'src',
	dist: 'dist'
}

module.exports = function(grunt) {
	//Configuration

	grunt.initConfig({
		config: config,
		pkg: config.pkg,
		bower: grunt.file.readJSON('./.bowerrc'),
		copy: {
			dist: {
				files: [{ //List of Files to be copied (Just Bootstrap CSS here)
					expand:true,
					cwd: '<%= bower.directory %>/bootstrap/dist',
					src: 'css/bootstrap.min.css',
					dest: '<%= config.dist %>'
				},
				{
					expand: true,
					cwd: '<%= bower.directory %>/bootstrap/dist',
					src: 'fonts/*',
					dest: '<%= config.dist %>'
				},
				{
					expand: true,
					cwd: '<%= config.app %>/html',
					src: '**',
					dest: '<%= config.dist %>'
				},
				{
					expand: true,
					cwd: '<%= bower.directory %>/angularjs',
					src: 'angular.min.js',
					dest: '<%= config.dist %>/js'
				},
				{
					expand: true,
					cwd: '<%= config.app %>',
					src: 'js/*.js',
					dest: '<%= config.dist %>'
				}
				]
			}
		},
		uglify: {
			options:{
				banner: '/*! <%= pkg.name %> lib - v<%= pkg.version %> -' +
          		'<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			dist: {
				files: {
					'<%= config.dist %>/js/lib.min.js': [//Minify below libraries into one file
						'<%= bower.directory %>/jquery/dist/jquery.js',
						'<%= bower.directory %>/bootstrap/dist/js/bootstrap.js',
						'<%= bower.directory %>/angular-contenteditable/angular-contenteditable.js',
						'<%= bower.directory %>/angular-contenteditable/angular-contenteditable-scenario.js'
					]
				}
			}
		},
		autoprefixer: {
			single_file: {
				src: '<%= config.app %>/css/main.css',
				dest: '<%= config.dist %>/css/main.css'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-autoprefixer')

	grunt.registerTask('default', [
    'copy',
    'uglify',
    'autoprefixer'
  	]);
};
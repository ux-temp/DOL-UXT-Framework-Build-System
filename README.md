# DOL-UXT-Framework-Build-System

This project is used to genereate the deployable UXT-Framework assets. In order to use this build system the development machine must meet the following requirments:

- NodeJS v.0.8.x
- GruntJS (grunt-cli) v.0.4
- Ruby v.1.9.x

## Generate Asssets

To generate assets using this system simply navigate to the project folder and enter one of the following commands:

### Development Mode

Development mode will make a copy of all assets and compile .scss/.sass file to css. No files will concatinated or minified.

<pre>
	<code>
		grunt
	</code>
</pre>

**OR**
<pre>
	<code>
		grunt --target='dev'
	</code>
</pre>

### Production Mode

Production mode will make a copy of all assets and compile .scss/.sass file to css. Files that would be concatinated for the published build are merged, but no files are minified.

<pre>
	<code>
		grunt --target='prod'
	</code>
</pre>

### Publish Mode

Publish mode will make a copy of all assets,compile .scss/.sass file to css, concatinate all other files together and minify all files for deployment.

<pre>
	<code>
		grunt --target='pub'
	</code>
</pre>
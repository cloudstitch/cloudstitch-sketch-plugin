/**
 * Plugin
 *
 * Defines the plugin structure and metadata.
 */


import * as commands from './commands'

export const HKSketchFusionExtension = {
  name: 'Cloudstitch',
  bundleName: 'Cloudstitch',
  description: 'Populate your Sketch designs with data from Google Spreadsheets and Microsoft Excel.',
  author: 'Cloudstitch',
  authorEmail: 'hello@cloudstitch.com',
  version: '1.0.1',
  identifier: 'com.cloudstitch.sketch-plugin',
  compatibleVersion: '3.7',
  menu: {
    'isRoot': false,
    'items': [
      'populateWithCloudstitchSpreadsheet',
      'createCloudstitchSpreadsheet',
      '-',
      'populateWithPreset',
      'populateWithJSON',
      'populateTable',
      'populateAgain',
      'revealPresets',
      'clearLayers'
    ]
  },
  commands: {
    populateWithPreset: {
      name: 'Populate with Preset',
      shortcut: '',
      description: 'Pick one of Data Populator\'s built in Presets',
      icon: '../Resources/populateWithPreset.png',
      run: commands.populateWithPreset
    },
    populateWithJSON: {
      name: 'Populate with JSON',
      shortcut: '',
      description: 'Pick a local JSON file',
      icon: '../Resources/populateWithJSON.png',
      run: commands.populateWithJSON
    },
    populateWithCloudstitchSpreadsheet: {
      name: 'Populate with Spreadsheet',
      shortcut: '',
      description: 'Pick a Cloud-hosted Google Sheet or Excel File',
      icon: '../Resources/populateWithCloudstitchSpreadsheet.png',
      run: commands.populateWithCloudstitchSpreadsheet
    },
    populateTable: {
      name: 'Populate Table',
      shortcut: '',
      description: 'Pick CSV file to populate a table',
      icon: '../Resources/populateTable.png',
      run: commands.populateTable
    },
    populateAgain: {
      name: 'Populate Again',
      shortcut: 'cmd shift x',
      description: 'Populate again with last used setup',
      icon: '../Resources/populateAgain.png',
      run: commands.populateAgain
    },
    revealPresets: {
      name: 'Reveal Presets',
      shortcut: '',
      description: 'Show Data Populator\'s Presets in Finder',
      icon: '../Resources/revealPresets.png',
      run: commands.revealPresets
    },
    createCloudstitchSpreadsheet: {
      name: 'Create Spreadsheet',
      shortcut: '',
      description: 'Create a linked spreadsheet to supply data',
      icon: '../Resources/createCloudstitchSpreadsheet.png',
      run: commands.createCloudstitchSpreadsheet
    },
    clearLayers: {
      name: 'Clear Layers',
      shortcut: '',
      description: 'Remove all populated data from selected Layers',
      icon: '../Resources/clearLayers.png',
      run: commands.clearLayers
    }
  }
}

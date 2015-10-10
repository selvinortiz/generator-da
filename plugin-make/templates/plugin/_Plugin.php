<?php
namespace craft\plugins\<%= handle %>;

use Craft;
use craft\app\base\Plugin;
use craft\plugins\<%= handle %>\models\<%= klass %>Settings;
use craft\plugins\<%= handle %>\services\<%= klass %>Service;

/**
 * Class <%= klass %>
 *
 * @package craft\plugins\<%= handle %>;
 *
 * @property <%= klass %>Service $service
 */
class <%= klass %> extends Plugin
{
	/**
	 * @return bool
	 */
	public static function hasCpSection()
	{
		return false;
	}

	/**
	 * @return void
	 */
	public function init()
	{
		parent::init();
	}

	/**
	 * @return Settings
	 */
	public function getSettingsModel()
	{
		return new <%= klass %>Settings();
	}

	/**
	 * @return string
	 */
	public function getVariableDefinition()
	{
		return 'craft\\plugins\\<%= handle %>\\variables\\<%= klass %>Variable';
	}
}

<?php
namespace craft\plugins\<%= handle %>;

use Craft;
use craft\app\base\Plugin;
use craft\plugins\<%= handle %>\models\Settings;
use craft\plugins\<%= handle %>\services\Service;

/**
 * Class <%= klass %>
 *
 * @package craft\plugins\<%= handle %>;
 *
 * @property Service $service
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
		return new Settings();
	}

	/**
	 * @return string
	 */
	public function getVariableDefinition()
	{
		return 'craft\\plugins\\<%= handle %>\\variables\\Variable';
	}
}

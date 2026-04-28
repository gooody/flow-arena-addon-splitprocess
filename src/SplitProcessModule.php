<?php

namespace FlowArenaModule\SplitProcess;

use App\Common\AddOns\Contracts\ModuleInterface;
use FlowArenaModule\AddonCommon\Abstracts\AbstractModule;


class SplitProcessModule extends AbstractModule implements ModuleInterface
{        
    /**
     * User-facing addon name displayed in UI and external interfaces.
     * @type string
     */
    protected string $title = "Split Process";
    
    /**
     * Unique internal addon alias, used system-wide; must not contain spaces.
     * @type string
     */
    protected string $alias = 'SplitProcess';

    /**
     * Programming language in which the addon is implemented and executed.
     * @type string
     */
    protected string $language = "php";

    /**
     * Human-readable description explaining what the addon does and its purpose.
     * @type string
     */
    protected string $description = "The 'Split Process' addon allows you to divide a data processing flow into multiple independent branches that run in parallel or separately. This enables handling different tasks simultaneously, improving performance and scalability. Each branch can process the same input in its own way, making it perfect for complex workflows where data needs to be transformed, analyzed, or routed through multiple paths at once.";
    
    /**
     * Defines addon category/usage context (e.g. decision, trigger, database, termination).
     * @type string
     */
    protected string $blockType = "process";
    
    /**
     * Path to the TypeScript file defining frontend integration logic.
     * @type string
     */
    protected string $frontServiceProvider = "../resources/js/index.ts";
    
    /**
     * Fully qualified class responsible for processing addon logic.
     * @type string
     */
    protected string $handler = \FlowArenaModule\SplitProcess\Handlers\SplitProcessHandler::class;

    /**
     * Returns absolute path to the frontend TypeScript service provider file or null if not set.
     * @return string|null
     */
    public function getFrontServiceProvider():string|null 
    {
        return $this->relativePath(__DIR__, $this->frontServiceProvider);
    }
}

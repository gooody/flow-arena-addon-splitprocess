<?php
namespace FlowArenaModule\SplitProcess\Handlers;

use App\Common\AddOns\Contracts\HandlerInterface;
use App\Common\AddOns\Contracts\StepProcessingContextInterface;

/**
 * Evenly distributes incoming data or execution flow across 
 * multiple parallel branches for balanced processing.
 * 
 * Class SplitProcessHandler
 * @package FlowArenaModule\SplitProcess
 */
class SplitProcessHandler implements HandlerInterface
{
    public function execute(StepProcessingContextInterface $stepProcessingContext) :void
    {
        foreach($stepProcessingContext->getExpansionPoints() AS $eventKey => $eventName) {
            $stepProcessingContext->busPublish(
                    $stepProcessingContext->getData(), 
                    $eventKey
                );
        }
    }
}
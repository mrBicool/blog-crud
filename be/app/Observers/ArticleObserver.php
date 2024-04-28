<?php

namespace App\Observers;

class ArticleObserver
{
    /**
     * Handle the Article "creating" event.
     *
     * @param  \App\Models\Article  $article
     * @return void
     */
    public function creating(\App\Models\Article $article): void
    {
        $article->slug = \Str::slug($article->title . '-' . \Str::random(5));
    }

    /**
     * Handle the Article "updating" event.
     *
     * @param  \App\Models\Article  $article
     * @return void
     */
    public function updating(\App\Models\Article $article): void
    {
        $article->slug = \Str::slug($article->title . '-' . \Str::random(5));
    }
}

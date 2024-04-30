<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ArticleRequest;
use App\Http\Resources\ArticleResource;
use App\Models\Article;
use Illuminate\Http\Request;

class ArticleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $items = Article::latest()
            ->filter($request->all())
            ->paginate($request->limit);

        return ArticleResource::collection($items);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(ArticleRequest $request)
    {
        $item = Article::create(
            array_merge(
                $request->validated(),
                ['author_id' => $request->user()->id]
            )
        );

        return new ArticleResource($item);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $item = Article::find($id);

        if (!$item) {
            return response()->json([
                'message' => 'Article not found',
            ], 404);
        }

        return new ArticleResource($item);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(ArticleRequest $request, string $id)
    {
        $item = Article::find($id);

        if (!$item) {
            return response()->json([
                'message' => 'Article not found',
            ], 404);
        }

        $item->update($request->validated());

        return new ArticleResource($item);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = Article::find($id);

        if (!$item) {
            return response()->json([
                'message' => 'Article not found',
            ], 404);
        }

        $item->delete();

        return response()->json([
            'message' => 'Article deleted',
        ]);
    }
}

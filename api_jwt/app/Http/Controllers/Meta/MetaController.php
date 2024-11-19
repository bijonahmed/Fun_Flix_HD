<?php

namespace App\Http\Controllers\Meta;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use Validator;
use Helper;
use App\Models\Holiday;
use App\Models\User;
use App\Models\LeaveType;
use App\Models\LeaveRule;
use App\Models\HolidayList;
use App\Models\LeaveAllocation;
use App\Models\LeaveRequest;
use Illuminate\Support\Str;
use App\Rules\MatchOldPassword;
use Illuminate\Support\Facades\Hash;
use DB;

class MetaController extends Controller
{


    public function getMeta(Request $request)
    {
        $data = array(
            'title'        => 'Welcome to FunflixHD',
            'description'  => "Welcome to FunFlixHD, your ultimate destination for unlimited movies, tutorial software, and gaming! Dive into a world of entertainment where you can watch your favorite movies without limits, explore cutting-edge software tutorials, and enjoy exciting games. Whether you're a movie buff, a tech enthusiast, or a gamer, FunFlixHD offers something for everyone. Join us today and unlock endless possibilities for fun and learning!",
            'keywords'     => "FunFlixHD, unlimited movies, movie streaming, tutorial software, software tutorials, gaming, watch movies online, movie entertainment, educational software, gaming tutorials, free movies, tech tutorials, gaming content, movie buffs, gaming enthusiasts.",

        );
        return response()->json($data, 200);
    }


    public function metaCategory(Request $request)
    {
        $data = array(
            'title'        => 'Category List',
            'description'  => "Category Description===",
            'keywords'     => "Category Keywords===",

        );
        return response()->json($data, 200);
    }


    public function metaGames(Request $request)
    {
        $data = array(
            'title'        => 'Games List',
            'description'  => "Games Description===",
            'keywords'     => "Games Keywords===",

        );
        return response()->json($data, 200);
    }


    public function metaVideos(Request $request)
    {
        $data = array(
            'title'        => 'Video List',
            'description'  => "Video Description===",
            'keywords'     => "Video Keywords===",

        );
        return response()->json($data, 200);
    }

    public function metaCourses(Request $request)
    {
        $data = array(
            'title'        => 'Course List',
            'description'  => "Course Description===",
            'keywords'     => "Course Keywords===",

        );
        return response()->json($data, 200);
    }
}

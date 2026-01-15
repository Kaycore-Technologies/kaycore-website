import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts, getAllCaseStudies, getAllServices } from '@/lib/sanity/queries';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');

    if (!type) {
      return NextResponse.json(
        { error: 'Missing type parameter' },
        { status: 400 }
      );
    }

    let data;

    switch (type) {
      case 'posts':
        data = await getAllPosts();
        break;
      case 'case-studies':
        data = await getAllCaseStudies();
        break;
      case 'services':
        data = await getAllServices();
        break;
      default:
        return NextResponse.json(
          { error: 'Invalid type parameter' },
          { status: 400 }
        );
    }

    return NextResponse.json(
      {
        success: true,
        type,
        data,
        count: Array.isArray(data) ? data.length : 0,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching CMS data:', error);

    return NextResponse.json(
      { error: 'Failed to fetch data from CMS' },
      { status: 500 }
    );
  }
}
